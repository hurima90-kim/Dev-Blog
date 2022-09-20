import { MutableRefObject, useEffect, useMemo, useRef, useState } from 'react'
import { PostListItemType } from 'types/PostItem.types'

export type useInfiniteScrollType = {
  containerRef: MutableRefObject<HTMLDivElement | null>
  postList: PostListItemType[]
}

// 한 번에 띄워줄 포스트 아이템의 갯수
const NUMBER_OF_ITEMS_PER_PAGE = 10

const useInfiniteScroll = function (
  selectedCategory: string,
  posts: PostListItemType[],
): useInfiniteScrollType {
  // PostListWrapper 컴포넌트를 연결하기 위해 HTMLDivElement 타입을 제네릭으로 정의
  const containerRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)
  const observer: MutableRefObject<IntersectionObserver | null> =
    useRef<IntersectionObserver>(null)
  const [count, setCount] = useState<number>(1)

  const postListByCategory = useMemo<PostListItemType[]>(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }: PostListItemType) =>
          selectedCategory !== 'All'
            ? categories.includes(selectedCategory)
            : true,
      ),
    [selectedCategory],
  )

  // 단 하나의 요소만 관측할 것이기 때문에 관측 요소 배열 파라미터에 해당하는 entries 인자에는 하나의 데이터만 존재합니다.
  // 그리고, 배열 내의 데이터에는 isIntersecting이라는 프로퍼티를 통해 화면에 노출되었는지를 확인할 수 있습니다.
  // const observer: IntersectionObserver = new IntersectionObserver(
  //   (entries, observer) => {
  //     if (!entries[0].isIntersecting) return

  //     setCount(value => value + 1)
  //     observer.disconnect()
  //   },
  // )
  useEffect(() => {
    observer.current = new IntersectionObserver((entries, observer) => {
      if (!entries[0].isIntersecting) return

      setCount(value => value + 1)
      observer.unobserve(entries[0].target)
    })
  }, [])

  useEffect(() => setCount(1), [selectedCategory])

  useEffect(() => {
    if (
      NUMBER_OF_ITEMS_PER_PAGE * count >= postListByCategory.length ||
      containerRef.current === null ||
      containerRef.current.children.length === 0 ||
      observer.current === null
    )
      return

    observer.current.observe(
      containerRef.current.children[containerRef.current.children.length - 1],
    )
  }, [count, selectedCategory])

  return {
    containerRef,
    postList: postListByCategory.slice(0, count * NUMBER_OF_ITEMS_PER_PAGE),
  }
}

export default useInfiniteScroll

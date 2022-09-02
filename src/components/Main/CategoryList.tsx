import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

// CategoryItem 컴포넌트에서 사용할 props
type CategoryItemProps = {
  active: boolean
}

// Link 컴포넌트에 전달해주기 위한 props
// active 속성이 존재하지만 중복, CategoryItem 컴포넌트에서는 그 외의 props가 사용되지 않으므로 분리
type GatsbyLinkProps = {
  children: React.ReactNode
  className?: string
  to: string
} & CategoryItemProps

export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    [key: string]: number
    // property name: string, property value: number를 나타내는 타입 표기 방법
  }
}

const CategoryListWrpper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 768px;
  margin: 100px auto 0;
`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<CategoryItemProps>`
  margin-right: 20px;
  padding: 5px 0;
  font-size: 18px;
  font-weight: ${({ active }) => (active ? '800' : '400')};
  cursor: pointer;

  &:last-of-type {
    margin-right: 0;
  }
`

const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <CategoryListWrpper>
      {/* Object.prototype.entries 메서드는 객체의 열거 가능한 속성들을 [key, value]쌍의 값들을 가진 배열을 반환 */}
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem
          to={`/?category=${name}`}
          active={name === selectedCategory}
          // active props가 boolean 형태라 콘솔에러 발생, 문자열 형태의 변경이 아닌 styled-component에서 props로 받아서 처리
          key={name}
        >
          #{name}({count})
        </CategoryItem>
      ))}
    </CategoryListWrpper>
  )
}

export default CategoryList

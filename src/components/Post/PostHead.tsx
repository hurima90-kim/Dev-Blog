import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

type GatsbyImgProps = {
  image: IGatsbyImageData
  alt: string
  className?: string
}

type PostHeadProps = {
  thumbnail: IGatsbyImageData
}

const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`
// !important 속성이 없으면 스타일 적용 순위에서 밀리기 때문에 위의 코드와 같이 직접 인라인으로 포지션 스타일을 넘겨주었습니다.(!important 속성은 가능한 사용하지 말아야 하는 속성)
const BackgroundImage = styled((props: GatsbyImgProps) => (
  <GatsbyImage {...props} style={{ position: 'absolute' }} />
))`
  z-index: -1;
  width: 100%;
  height: 400px;
  object-fit: cover;
  filter: brightness(0.25);
`

const PostHead: FunctionComponent<PostHeadProps> = function ({ thumbnail }) {
  return (
    <PostHeadWrapper>
      <BackgroundImage image={thumbnail} alt="thumbnail" />
    </PostHeadWrapper>
  )
}

export default PostHead

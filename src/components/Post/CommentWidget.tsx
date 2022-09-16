import React, { createRef, FunctionComponent, useEffect } from 'react'

const src = 'https://utteranc.es/client.js'
const repo = 'hurima90-kim/hurima90-kim.github.io' // 자신 계정의 레포지토리로 설정

type UtterancesAttributesType = {
  src: string
  repo: string
  'issue-term': string
  label: string
  theme: string
  crossorigin: string
  async: string
}

const CommentWidget: FunctionComponent = function () {
  const element = createRef<HTMLDivElement>()

  // 컴포넌트가 마운트될 때 빈 스크립트 태그를 생성, 필요한 속성들을 setAttribute 메서드로 추가
  // 필요한 속성이 추가된 스크립트 태그를 appendChild 메서드를 통해 빈 div 태그 내에 추가
  useEffect(() => {
    if (element.current === null) return

    const utterances: HTMLScriptElement = document.createElement('script')

    const attributes: UtterancesAttributesType = {
      src,
      repo,
      'issue-term': 'pathname',
      label: 'Comment',
      theme: `github-light`,
      crossorigin: 'anonymous',
      async: 'true',
    }

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value)
    })

    element.current.appendChild(utterances)
  }, [])

  return <div ref={element} />
}

export default CommentWidget

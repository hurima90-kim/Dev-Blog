<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  How to use Gatsby's markdown
</h1>

## 🚀 Quick start

1.**문단 나누기**

    Dash 3개를 입력하면 아래와 같이 문단을 나눠주는 라인이 생성됩니다.

    ---
    ```
    ---
    ```

2.**인용구**

> 을 사용하여 텍스트를 인용할 수 있습니다.
> 연속해서 두 줄 입력하면 연속되는 내용을 한번에 입력할 수 있습니다.

> 한 줄을 추가로 띄면 글 내용을 나눌 수 있습니다.

> 들여쓰기

> > 두 번 입력하여 들여쓰기도 가능합니다.

> > > 3번 입력

> > > > 4번 입력

> > > > > 5번

3.**강조**

아래와 같은 기호를 사용하여 볼드, 취소선, 밑줄을 사용할 수 있습니다.

```
**Bold** or __Bold__

~~Strikethrough~~

<u>Underline</u>
```

**Bold** or **Bold**

~~Strikethrough~~

<u>Underline</u>

3.**코드 삽입**

`inline code`를 삽입하고 싶다면 백틱(`) 사이에 코드를 삽입하면 됩니다.
전체 코드를 삽입하고 싶을 경우엔 백틱 3개(```)를 사용합니다.

```
ex) npm run start
```

4.**리스트**

**_순번 리스트_**

1. 보이는 것처럼 번호를 기재하면 그대로 순서를 나타낼 수 있습니다.
2. 만약 더 세분화가 필요할 경우 줄을 바꾼 뒤 들여쓰고 -을 추가합니다. 아래처럼 표시됩니다.
   - 3번의 세부 내용
3. 세부 내용에도 번호를 매길 수 있습니다.
   - 들여 쓴 뒤 번호를 매겨주면 적용됩니다.

**_순번없는 리스트_**

```
- 별표 (*)
- 마이너스 기호 (-)
+ 플러스 기호 (+)
```

- 별표 (\*)
- 마이너스 (-)
- 플러스 (+)

  5.**링크 삽입**

**_기본 링크_**

```
[inline-style 링크](https://www.google.com)

[제목이 있는 inline-style 링크](https://www.google.com "링크 제목")

사이트 주소로 그대로 불러오려면 `<>` 안에 사이트 url(<http://www.google.com>)을 배치합니다.
```

[inline-style 링크](https://www.google.com)

[제목이 있는 inline-style 링크](https://www.google.com '링크 제목')

사이트 주소로 그대로 불러오려면 `<>` 안에 사이트 url(<http://www.google.com>)을 배치합니다.

**_다른 링크_**

../을 사용하여 전체 url 없이 내부 포스팅/페이지 링크를 만들 수 있습니다.

많이 사용해야 하는 링크의 경우 마지막 두 줄처럼 이름을 미리 [] 안에 정의한 후 자유롭게 불러오는 것도 가능합니다.

```
[내부 링크](../about)

[링크 스타일][1]

[예시]

[1]

// 포스팅 최하단에 기재할 내용

[1]: http://www.google.com

[예시]: http://www.google.com
```

6.**이미지 삽입**

```
![example](./image.png)
```

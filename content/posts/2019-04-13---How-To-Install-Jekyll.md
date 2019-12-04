---
title: Jekyll로 블로그 만들기
date: "2019-04-13T22:40:32.169Z"
template: "post"
draft: false
slug: "/posts/how-to-install-jekyll/"
category: "jekyll"
description: "Jekyll로 정적 블로그를 만들어 봅니다."
tags:
  - "jekyll"
---

# Jekyll로 블로그 만들기

_[wecode](https://wecode.co.kr) 수강생 대상으로 작성한 포스팅입니다._

그 동안 배운 것들을 정리할 블로그를 만들어 보겠습니다. 블로그를 만들려면 어떤 페이지가 필요할까요?

바로 이전에 미니 트위터를 만들었는데, 그 것보다는 더 복잡할 것 같다는 느낌이 확실히 드네요!

* 블로그 홈(최신 글 모음)
* 카테고리 별로 포스팅 목록을 볼 수 있는 페이지
* 글 쓰는 페이지
* 로그인 페이지
* 등등..

HTML, CSS, JavaScript로 나만의 블로그를 만들려면 시간이 한참 걸릴 것 같습니다.

그래서...! 일일이 개발할 필요 없이 미리 어느 정도 만들어주는 site generator를 쓰려고 합니다.
여러 generator가 있는데 그 중에 [Jekyll](https://jekyllrb.com) 이라는 것을 사용하겠습니다.
몇 개의 명령어로, 단 몇 분만에 블로그 설치가 가능합니다.

우리는 블로그를 설치하고, 조금 커스터마이징을 거친 후 바로 배포해보겠습니다!
github를 이용해서 배포할 것이고, github에서 제공하는 도메인을 사용하려고 합니다.

#### 시작하기 전에
위에서 나온 새로운 단어 몇 개를 설명드리고 가겠습니다.

_`배포`_

`배포(deploy)한다.` or `디플로이한다.` 라는 말을 앞으로 자주 하고, 듣게 될 것입니다.

배포란, 그동안 개발하던 것을 세상(인터넷상)에 드디어 공개하고 모든 사람들이 접근해서 볼 수 있게 하는 것을 의미합니다.


_`도메인`_

도메인은 `wecode.co.kr`, `google.com`과 같은 영문 주소를 의미합니다.
원래는 110.13.109.111과 같은 숫자로 이루어진 ip주소인데, 사람들이 기억하기 쉽도록 영문주소로 바꿔 사용하고 있습니다.

나만의 블로그를 갖고 싶다면 도메인을 구입하고, 직접 ip 주소에 연결하는 과정을 거쳐야 하지만 github에서 Github Pages 라는 서비스를 사용할 예정입니다.
개인적으로 도메인을 구매했다면 자신만의 도메인을 연결할 수 있습니다.

#### 블로그 설치 순서
1. Ruby 설치
2. jekyll, bundler 설치
3. 블로그 설치
4. 내 컴퓨터(로컬환경)에서 블로그 띄우기
5. github.io repo만들기
6. 코드 올리기

### 1. Ruby 설치

블로그를 설치하려면 jekyll을 설치해야하고, jekyll을 설치하려면 Ruby를 설치해야 합니다.

Ruby는 Python, JavaScript같은 컴퓨터 언어 중 하나입니다. Ruby 지식 없이도 설치 가능하니 걱정마세요!!(저도 잘 모름)

Jekyll 을 사용하려면 Ruby 버전 2.3.0 이상이 깔려 있어야 합니다.
아래의 명령어로 ruby 버전을 확인할 수 있습니다.
```
ruby -v
```


mac은 기본적으로 ruby가 깔려있지만 버전이 다를 수도 있으니 잘 확인해주세요.
window/linux는 깔려있지 않으니 ruby를 설치합시다.

설치한 후 ruby -v 으로 제대로 설치했는지 확인해주세요.

#### 참고
* 구글 install ruby를 검색
* 업데이트 시, [https://stackoverflow.com/questions/38194032/how-to-update-ruby-version-2-0-0-to-the-latest-version-in-mac-osx-yosemite](https://stackoverflow.com/questions/38194032/how-to-update-ruby-version-2-0-0-to-the-latest-version-in-mac-osx-yosemite)
첫 번째 답변확인

제 ruby 버전입니다. 같을 필요는 없습니다.
```
ruby -v
ruby 2.4.2p198 (2017-09-14 revision 59899) [x86_64-darwin18]
```


### 2. jekyll, bundler 설치

이제 ruby의 package manager인 gem으로 jekyll과 bundler를 설치합니다.
```
gem install jekyll bundler
```
[jekyll 공식문서](https://jekyllrb.com/docs/)를 보고 설치하셔도 됩니다.



### 3. 블로그 설치(생성)

블로그를 만들고 싶은 directory에서 아래와 같이 실행합니다.
저는 myblog라는 이름으로 만들어 주었습니다.
```
jekyll new myblog
```

성공하면 현재 위치에 myblog라는 디렉토리가 생성되고, 이 안에 각종 파일이 생성됩니다.
방금 만든 디렉토리로 가서 파일이 잘 생겼는지 확인해주세요.
```
cd myblog
```
<img src="/img/190227-3.png" width="500"/>

myblog 디렉토리 밑의 파일들은 모두 git에 올라갈 예정입니다.
그러므로 본인이 앞으로 소스코드를 모아놓을 곳에 생성해주세요.

저는 `/Users/AllieKim/Projects` 아래인
`/Users/AllieKim/Projects/myblog`에 생성했습니다. 앞으로 `/Users/AllieKim/Projects/myblog`를 블로그 루트(root)라고 표현하겠습니다.



### 4. 내 컴퓨터(로컬환경)에서 블로그 띄우기

git에 포스팅을 올려 배포되기 전에, 잘 작성되었는지 미리 확인해야겠죠? 블로그 root에서 아래의 명령어를 실행해주세요.
```
bundle exec jekyll serve
```

브라우저를 열고 주소창에 localhost:4000으로 접속해보세요.

_`localhost`_

localhost, 로컬, 로컬환경 이라는 단어가 앞으로 많이 등장할 예정입니다. 로컬환경에 대해 잠깐 설명드리겠습니다.

웹상에 html, css, js를 작동시켜서 사이트를 보려면 서버가 필요합니다.
aws, cafe24 등에서 서버를 빌려서 우리의 블로그 파일들을 올리고 어느 누구든지 접근할 수 있게 하는 것을 호스팅이라고 합니다.
서버를 빌렸으니 렌탈비용을 내야하는데 이런 것을 호스팅 비용이라고 하죠. (참고로 우리는 github의 서버를 통해 호스팅하고, 물론 무료입니다!)

그런데 markdown으로 작성된 포스팅이 잘 나오는지 매번 github에 올린 후, 내 사이트에 접속해서 확인하기는 번거롭습니다.
아니면 블로그 css를 바꾸고 싶은데, 버튼 색 하나 바꾸고 잘 나오는지 확인하려면 github에 올린 후, 사이트에 접속해서 확인을 해야겠죠.

번거롭습니다! 그렇다면 내 컴퓨터를 서버로 만들어서 사이트가 잘 나오는지 확인할 수 있습니다.
내 컴퓨터에서 볼 수 있기 때문에 `로컬환경` 이라고 말합니다.

개발할 동안, 내 컴퓨터에서 서버를 띄워서 `localhost:4000`으로 접속하면 html, css, js등을 올리고 잘 작동되는지 확인할 수 있습니다.
멈추고 싶으면 서버를 실행한 터미널에서 `ctrl c`를 입력해보세요.



### 5. github.io repo만들기
github에 접속해서 새로운 repository를 만들어 주세요. 아래와 같이 github의 `username` 뒤에 `.github.io` 을 붙여주세요.
제 github username은 `yeri-kim`이기 때문에 `yeri-kim.github.io` 으로 만들었습니다.
(username말고 다른 이름을 붙이면 블로그 주소가 길어집니다.)
![](/media/190227-5.png)

[yeri-kim.github.io](yeri-kim.github.io)의 도메인으로 접속할 수 있는 블로그 repository가 생성되었습니다!


### 6. 코드 올리기
이제 로컬에 있는 블로그 소스코드를 github에 올리겠습니다.

블로그 root에서 git을 세팅합시다. yeri-kim 부분은 각자의 username으로 해주세요.
```
git init
git remote add origin https://github.com/yeri-kim/yeri-kim.github.io.git
```


#### commit, push 하기

```
git add .
git commit -m “first commit”
git push -u origin master
```

네! 드디어 내 블로그가 세상에 공개되었습니다. 각자 블로그 주소에 접속해서 잘 나왔는지 확인해주세요.



### reference
codecademy





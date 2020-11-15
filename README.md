# shareKakao

* [Ko] 카카오톡 공유하기 모듈
* [En] Kakao Share Module

![Alt text](0BBF7F9C-07AF-4092-87B7-AA727E2347FB.jpeg)

> # How to Apply Module
> > * English
> > 1. Save 'share.js' in your phone.
> > 2. Copy 'share.js'.
> > 3. Open Bot folder and find 'modules' folder in your project.
> > 4. Open and paste 'share.js'.
>
> > * Korean
> > 1. 'share.js' 파일을 내 휴대폰에 저장합니다.
> > 2. 'share.js' 파일을 복사합니다.
> > 3. 봇 폴더를 열고 프로젝트 안에 있는 'modules' 폴더를 찾으세요.
> > 4. 폴더를 열고 아까 복사한 'share.js' 파일을 붙여 넣으세요.

# Warning
해당 모듈을 사용 시 얻는 모든 불이익은
모듈을 사용한 본인에게 있다는 점 알려드립니다.

> # Example
> ``` javascript
> const shareKakao = require("share");
> const Kakao = new shareKakao();
> Kakao.package("com.kakao.tall");
> ```
> 
> > * Share Simple Text
> > ``` javascript
> > Kakao.share("chat_id", {
> >     "type": 1,
> >     "message": "example",
> >     "attachment": {}
> > });
> >    ```
> 
> > * Share Shout Text
> > ``` javascript
> > Kakao.share("chat_id", {
> >     "type": 1,
> >     "message": "example",
> >     "attachment": {
> >         "shout": true
> >     }
> > });
> > ```
>
> > * Share Simple Image
> > ``` javascript
> > Kakao.share("chat_id", {
> >     "type": 2,
> >     "message": "사진",
> >     "attachment": {
> >         "type": "image/jpeg",
> >         "w": 210,
> >         "h": 210,
> >         "path": "talkm/oXZBbblXG5/6VjK4Jl8OgLCiEfoFLS9V0/i_g9kyvd2sw3il.jpeg"
> >     }
> > });
> > ```
>
> # Available Types
> ``` javascript
> {
>     1: "text",
>     2: "image",
>     3: "video",
>     16: "map",
>     18: "file"
> }
> ```

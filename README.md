# shareKakao

![Alt text](0BBF7F9C-07AF-4092-87B7-AA727E2347FB.jpeg)

카카오톡 공유하기 기능을 이용한 **shareKakao** 모듈입니다.


> # Example
> ```
> const shareKakao = require("share");
> const Kakao = new shareKakao();
> ```
> > * App Package Setting
> > ```
> > Kakao.package("com.kakao.tall");
> > ```
>
> > * Simple Text Send
> > ```
> > Kakao.share("00000000", {
> >     "type": 1,
> >     "message": "example",
> >     "attachment": {
> >         "shout":true
> >     }
> > });
> > ```

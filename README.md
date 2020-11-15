# shareKakao

![Alt text](0BBF7F9C-07AF-4092-87B7-AA727E2347FB.jpeg)


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

# shareKakao

![Alt text](0BBF7F9C-07AF-4092-87B7-AA727E2347FB.jpeg)


> # Example
> ``` javascript
> const shareKakao = require("share");
> const Kakao = new shareKakao();
> Kakao.package("com.kakao.tall");
> ```
>
>
> > * Simple Text Share
> > ``` javascript
> > Kakao.share("chat_id", {
> >     "type": 1,
> >     "message": "example",
> >     "attachment": {}
> > });
> > ```
>
>
> > * Shout Text Share
> > ``` javascript
> > Kakao.share("chat_id", {
> >     "type": 1,
> >     "message": "example",
> >     "attachment": {
> >         "shout": true
> >     }
> > });
> > ```

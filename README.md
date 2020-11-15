# shareKakao

![Alt text](0BBF7F9C-07AF-4092-87B7-AA727E2347FB.jpeg)


> # Example
> ``` javascript
> const shareKakao = require("share");
> const Kakao = new shareKakao();
> Kakao.package("com.kakao.tall");
> ```
>
> h
>
> > * Share Simple Text
> > ``` javascript
> > Kakao.share("chat_id", {
> >     "type": 1,
> >     "message": "example",
> >     "attachment": {}
> > });
> > ```
>
> h
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

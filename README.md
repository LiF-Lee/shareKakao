# shareKakao

![Alt text](0BBF7F9C-07AF-4092-87B7-AA727E2347FB.jpeg)


> # Example
> ``` javascript
> const shareKakao = require("share");
> const Kakao = new shareKakao();
> ```
> > * App Package Setting
> > ``` javascript
> > Kakao.package("com.kakao.tall");
> > ```
>
> > * Simple Text Send
> > ``` javascript
> > Kakao.share("chat_id", {
> >     "type": 1,
> >     "message": "example",
> >     "attachment": {}
> > });
> > ```

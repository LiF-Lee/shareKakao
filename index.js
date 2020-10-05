importClass(org.jsoup.Jsoup);
const shareKakao = {
    setting: {
        path: {
            "pu": "data/data/com.kakao.tall/shared_prefs/KakaoTalk.hw.perferences.xml",
            "at": "data/data/com.kakao.tall/shared_prefs/KakaoTalk.authorization.preferences.xml"
        }
    },
    header: {
        "ct": "application/x-www-form-urlencoded",
        "al": "ko-kr",
        "ua": "KakaoTalk Share Extension/9.0.4"
    },
    sendText: function(chatId, text) {
        shareKakao.sendData(chatId, 1, "", text);
    },
    sendShoutText: function(chatId, text) {
        let form = JSON.stringify({
            "shout": true
        });
        shareKakao.sendData(chatId, 1, form, text);
    },
    sendLongText: function(chatId, text, path) {
        let form = JSON.stringify({
            "path": path,
            "sd": "false"
        });
        shareKakao.sendData(chatId, 1, form, text);
    },
    sendImage: function(chatId, path, w, h) {
        let form = JSON.stringify({
            "width": w,
            "height": h,
            "path": path,
            "type": "image/jpeg"
        });
        shareKakao.sendData(chatId, 2, form);
    },
    sendVideo: function(chatId, path, w, h) {
        let form = JSON.stringify({
            "width": w,
            "height": h,
            "path": path,
            "type": "image/jpeg"
        });
        shareKakao.sendData(chatId, 3, form);
    },
    sendMap: function(chatId, latitude, longitude, locName) {
        let form = JSON.stringify({
            "a": locName,
            "lat": latitude,
            "lng": longitude,
            "c": false
        });
        shareKakao.sendData(chatId, 16, form);
    },
    getDuuId: function() {
        var a = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
        var instance = java.security.MessageDigest.getInstance("SHA");
        instance.reset();
        var uuid = FileStream.read(shareKakao.setting.path.pu).split("<string name=\"deviceUUID\">")[1].split("</string>")[0];
        var bytes = new java.lang.String("dkljleskljfeisflssljeif " + uuid).getBytes();
        instance.update(bytes);
        var bArr = instance.digest();
        var stringBuffer = new java.lang.StringBuffer();
        for (var i = 0; i < bArr.length; i++) {
            b2 = bArr[i];
            stringBuffer.append(a[(b2 & 240) >> 4]);
            stringBuffer.append(a[b2 & 15]);
        }
        return stringBuffer.toString();
    },
    getOauthToken: function() {
        var key1 = [67, 109, -115, -110, -23, 119, 33, 86, -99, -28, -102, 109, -73, 13, 43, -96, 109, -76, 91, -83, 73, -14, 107, -88, 6, 11, 74, 109, 84, -68, -80, 15];
        var key2 = [10, 2, 3, -4, 20, 73, 47, -38, 27, -22, 11, -20, -22, 37, 36, 54];
        var auth_token = FileStream.read(shareKakao.setting.path.at).split("<string name=\"encrypted_auth_token\">")[1].split("</string")[0];
        var b64_decrypted_auth_token = android.util.Base64.decode(auth_token, 0);
        var cipher = new javax.crypto.Cipher.getInstance("AES/CBC/PKCS5PADDING");
        var key = new javax.crypto.spec.SecretKeySpec(key1, "AES");
        var iv = new javax.crypto.spec.IvParameterSpec(key2);
        cipher.init(2, key, iv);
        var final = cipher.doFinal(b64_decrypted_auth_token);
        return JSON.parse(new java.lang.String(final, "UTF-8")).access_token;
    },
    sendData: function(chatId, type, form, text) {
        let duuid = shareKakao.getDuuId();
        let oauthToken = shareKakao.getOauthToken();
        let sendTarget = JSON.stringify({
            "chatId": chatId
        });
        let sendForm = JSON.stringify({
            "type": type,
            "message": text,
            "extra": form
        });
        const connection = Jsoup.connect('https://talk-shareex.kakao.com/authWrite').header(
            'Content-Type', shareKakao.header.ct).header(
            'Accept-Language', shareKakao.header.al).header(
            'User-Agent', shareKakao.header.ua).requestBody(
            'chatLog=' + sendForm +
            '&duuid=' + duuid +
            '&oauthToken=' + oauthToken +
            '&target=' + sendTarget
        ).ignoreContentType(true).ignoreHttpErrors(true).post().text();
        return connection;
    }
};

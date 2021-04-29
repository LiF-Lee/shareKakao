"use strict";
module.exports = function() {
    /* https://github.com/EliF-Lee/shareKakao */
    function t() {
        this.h = {
            ct: "application/x-www-form-urlencoded", cj: "application/json", ua: "KakaoTalk Share Extension/9.1.7"
        }, this.pa = null, this.mi = null, this.k = [
            ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"], [10, 2, 3, -4, 20, 73, 47, -38, 27, -22, 11, -20, -22, 37, 36, 54],
            [67, 109, -115, -110, -23, 119, 33, 86, -99, -28, -102, 109, -73, 13, 43, -96, 109, -76, 91, -83, 73, -14, 107, -88, 6, 11, 74, 109, 84, -68, -80, 15],
            "dkljleskljfeisflssljeif "
        ], this.p = {
            pu: "hw.perferences.xml", at: "authorization.preferences.xml"
        }, this.d = '<string name="deviceUUID">', this.e = '<string name="encrypted_auth_token">';
    }
    return t.prototype.package = function(t) {
        this.pa = "data/data/" + t + "/shared_prefs/KakaoTalk.";
    }, t.prototype.myUserId = function(i) {
        this.mi = i;
    }, t.prototype.auth = function() {
        return this.gOT() + "-" + this.gDI();
    }, t.prototype.r = function(t) {
        return FileStream.read(t);
    }, t.prototype.gDI = function() {
        let t = java.security.MessageDigest.getInstance("SHA");
        t.reset(), t.update(this.j(this.k[3] + this.r(this.pa + this.p.pu).split(this.d)[1].split("</string>")[0]).getBytes());
        let e = t.digest(), a = new java.lang.StringBuffer, n = this.k[0];
        for (let t = 0; t < e.length; t++) {
            let s = e[t];
            a.append(n[(240 & s) >> 4]), a.append(n[15 & s]);
        }
        return a.toString();
    }, t.prototype.gOT = function() {
        let t = this.r(this.pa + this.p.at).split(this.e)[1].split("</string>")[0],
            e = new javax.crypto.Cipher.getInstance("AES/CBC/PKCS5PADDING"),
            a = new javax.crypto.spec.SecretKeySpec(this.k[2], "AES"),
            n = new javax.crypto.spec.IvParameterSpec(this.k[1]);
        e.init(2, a, n);
        let s = this.j(e.doFinal(android.util.Base64.decode(t, 0)), "UTF-8");
        return JSON.parse(s).access_token;
    }, t.prototype.rN = function() {
        return Math.random()*10000|0;
    }, t.prototype.j = function(t) {
        return new java.lang.String(t);
    }, t.prototype.shareSharp = function(t, e) {
        let content = [], bul = [];
        if(e.type.toLowerCase() === "image") {
            for(let j in e.object.content) content.push({I: e.object.content[j].image_url, W: e.object.content[j].width, H: e.object.content[j].height, L: e.object.content[j].web_url});
        } else for(let i in e.object.content) content.push({T: e.object.content[i].title, D: e.object.content[i].description, L: e.object.content[i].web_url});
        for(let l in e.object.button) bul.push({T: e.object.button[l].title, L: e.object.button[l].web_url});
        const response = org.jsoup.Jsoup.connect("https://talk-pilsner.kakao.com/search-express")
        .header("Content-Type", this.h.cj).header("authorization", this.auth())
        .requestBody(JSON.stringify({
            userId: this.mi, chatId: t, msgId: this.rN(),
            dc: "SH1", query: e.query, message: {
                isExpress: true, V: e.type, Q: e.query, 
                L: e.web_url, R: content, F: {
                    BU: bul
                }
            }
        })).ignoreContentType(true).ignoreHttpErrors(true).method(org.jsoup.Connection.Method.POST).execute();
        return (response.statusCode() === 200) ? response.body() : "ERROR";
    }, t.prototype.share = function(t, e) {
        const response = org.jsoup.Jsoup.connect("https://talk-shareex.kakao.com/authWrite")
            .header("Content-Type", this.h.ct).userAgent(this.h.ua)
            .requestBody("chatLog=" + JSON.stringify({
                type: e.type,
                message: e.message,
                extra: JSON.stringify(e.attachment)
            }) + "&duuid=" + this.gDI() + "&oauthToken=" + this.gOT() + "&target=" + JSON.stringify({
                chatId: t
            })).ignoreContentType(true).ignoreHttpErrors(true)
            .method(org.jsoup.Connection.Method.POST).execute();
        return (response.statusCode() === 200) ? response.body() : "ERROR";
    }, t;
}();

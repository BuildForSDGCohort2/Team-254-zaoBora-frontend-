/**
 * This file contains the class for client storage
 */


export default class CookieStorage {

    // create and set cookie values
    setCookie(cname='user', cvalue, exdays=1) {
        let d = new Date();

        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"; // add secure flag in prod env
    }

    // fetch cookie values
    getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');

        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    // delete a cookie
    eraseCookie(cname = 'user') {
        console.log('deleting cookie..')
        document.cookie = cname + '=; Max-Age=-99999999;';
        console.log('cookie deleted')
    }
}
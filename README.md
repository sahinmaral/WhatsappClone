# Başlıklar / Headings

- [Whatsapp Web Clone - TR](#tr-doc)
- [Whatsapp Web Clone - ENG](#eng-doc)

<div id="tr-doc">

## Whatsapp Web Clone - TR

Bu projeyi Esenler Belediyesi'nin düzenlemiş olduğu Yazılımcı Fabrikası Bootcamp bitirme projesi olarak yapmış bulunmaktayım. Bu projedeki amaç , Whatsapp Web klonunu yapmaktır. Proje üzerinde şu anlık herhangi bir backend ile haberleşme bulunmamaktadır fakat veritabanı , yetkilendirme , depolama gibi işlemleri Google Firebase servisi üzerinden halledilmektedir.
Client tarafında kullanılan teknolojiler
- Formik
- React-Router
- Firebase
    - Firebase Storage
    - Firebase Authentication
    - Firebase Realtime Database
    - Firebase Database
- Tailwind CSS
- Redux Toolkit
- Toastify
- UUID
- Yup

Whatsapp Web klon uygulamamızda uygulama anasayfası , kullanıcı giriş ve kayıt işlemleri için sayfaları ve kullanıcı giriş yaptıktan sonra asıl uygulamanın giriş ekranı karşılamaktadır.

Uygulama üzerinde tema ayarlama seçeneği mevcuttur ve bu seçenek kullanıcı , uygulamayı kullanırken tema değişikliği anında veritabanına kaydedilip tekrardan aynı tema üzerinden uygulamayı kullanacak şekilde ayarlanmıştır.

Uygulama üzerinde kullanıcılar , kullanıcı isimlerini , profil fotoğraflarını , hakkında bilgilerini değiştirebilirler fakat e-mail adresleri değiştirilemez. Bu nedenle kullanıcılar arasında mesajlaşma yapmaları için ikisinden birinin e-mail adresi ile arkadaşlık isteği yollayıp diğer kullanıcının da bu isteği onaylaması gerekir. Arkadaşlık isteği sonucu isteği reddedebilir , kabul edebilir veya kullanıcıyı bloke edebilir. Kullanıcı, loke ettiği kullanıcının engelini tekrardan kaldırabilir.

Kullanıcılar birbirleriyle anlık bir şekilde mesajlaşmaktadırlar , bu olayı Firebase üzerindeki Real-Time database teknolojisi üzerindeki onValue metodu sayesinde veritabanı üzerindeki herhangi bir değişikliği dinleyebilme özelliği sayesinde halletmeyiz.

Projeye https://sahinmaral-whatsappclone.netlify.app linki üzerinden erişebilirsiniz.

</div>

<div id="eng-doc">

## Whatsapp Web Clone - ENG

I am trying to have this project as a Software Factory Bootcamp graduation project organized by Esenler Municipality. The aim in this project is to make a Whatsapp Web clone. On the project, documents, authorization, storage, etc., which do not have any back-end and broadcast data at the moment, are handled through the Google Firebase service.
Technologies used on the client side
- Formik
- React Router
- Firebase
    - Firebase Storage
    - Firebase Authentication
    - Firebase Realtime Database
    - Firebase Database
- Tailwind CSS
- Redux Toolkit
- Toastify
- UUID
- Yup

In our Whatsapp Web clone application, the application homepage meets the pages for user login and registration, and the false login screen after user logins.

There is an option to edit the theme on the application, and this option is set to temporarily save the theme running the run in archives and use it to run again on the same theme.

On the application, users store their usernames, profile, and about, but their e-mail addresses cannot be changed. For this reason, in order to send messages between users, one of them must send a friend request with their e-mail address and the other user must approve this request. As a result of the friend request, they can reject, accept or block the user. The user can unblock the locked users again.

They are messaging users detecting somehow, we do not handle this event with the ability to transfer it to any other place in the notebooks, thanks to the onValue method on the Real-Time database technology on Firebase.

The project can be accessed via https://sahinmaral-whatsappclone.netlify.app

</div>
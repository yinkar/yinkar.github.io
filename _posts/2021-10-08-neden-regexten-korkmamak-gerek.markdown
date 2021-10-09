---
layout: post
title: "Neden Regex'ten Korkmamak Gerek"
date: 2021-10-08 01:58:00 +0300
categories: blog
---
Çoğu yazılımcı genellikle Regex ismini duyduğu anda kaçacak delik arıyor. Tabii bunu anlamak kolay. Regex'i tanımlamak adına çok güzel bir ifade duymuştum: write-only language. Tıpkı yıllar önce, çocukluk yıllarında HTML ile web sayfaları oluşturmaya çalışırken Javascript kodlarının bize büyü gibi gelmesi gibi bir hissiyat yaratıyor Regex. Javascript kodlarını sayfamıza eklerdik ve o anlamsız görünen semboller, ifadeler sayfa kodlarına yapıştırıldığı anda havai fişekler patlardı, rengarenk yazılar sayfada dans ederdi, tarayıcı ekranı deprem efektiyle sallanırdı... Tek yapabildiğimiz ise bu işlevsel kodları kullanabilmek için bir yerlerden kopyalayıp yapıştırmaktı. Çünkü o dünya içine dalmak için çok komplike görünüyordu.

Regex sorgularını da yazılımcıların büyük çoğunluğu bu şekilde kullanıyor. Örneğin bir e-mail sorgulaması gerektiğinde bunun için bir Regex sorgusu aratarak bu sorunu çözme yolunu seçiyorlar. Ancak şunu belirtmekte fayda var, Regex yazmayı öğrendiğinizde birçok konuda işiniz çok kolaylaşacak. Bir metin içerisinde istediğiniz formata uyan her şeyi, dosya isimleri arasında istediğiniz formatta olanları seçip alabilecek, bir dökümanda istemediğiniz kısımları silip sadeleştirebileceksiniz. Şöyle bir şey anlatayım: üniversitede web programlama dersinde öğretim üyesi kendi sitesine kopya engeli koyduğu PDF dosyalarında yer alan kodları aynen yazmamızı istemişti. Kendisi çok iyi niyetli bir insan olsa da bu yöntem oldukça verimsizdi ve benim de halihazırda bildiğim ve kullandığım kodları yazmam gerekiyordu. Ben ise PDF dosyalarını kopyalanabilir bir formata dönüştürerek kodların başındaki ve sonundaki kısımları kullandığım metin editörü olan Sublime Text'in bul ve değiştir kısmındaki Regex özelliği ile ayıklamış, kodu o şekilde çalıştırmıştım. Yanımdaki arkadaş ise bana büyü yapıyormuşum gözüyle bakıyordu şlfgdhj

Burada Regex'i anlatmaya regexr.com gibi bir web sitesi üzerinden başlamayı düşünüyorum. Daha sonradan programlama dillerindeki kullanımına geçerim. Normal şartlar altında ben daima gerçek hayattaki senaryolar üzerinden doğrudan anlatmayı seçerim fakat konu Regex olunca programlama dilleri üzerindeki yansıması pek bir farkı oluyor. Bu en başta öğreteceğim şekli ile Regex'i yine verimli bir şekilde kullanabilirsiniz. Tıpkı verdiğim örnekteki gibi bir metin editöründe yardımcı olacaktır. Veya Regex'i zaten kullandığınız programlama dilinde çalıştırmanın yolunu biliyorsanız bu sizin için sorun teşkil etmeyecektir. Ben Regex'i hiç kullanmamış olan insanların da anlamasını istiyorum, bu yüzden ilerleyen kısımlarda programlama dilleri üzerindeki kullanımlarına da değineceğim.

Regexr.com'u açtığınızda karşınıza şöyle bir görüntü çıkacaktır.
![Regexr.com'un görüntüsü](/images/blog/regex/regex-1.png)
Şimdi öncelikle temel kısımları açıklamakla başlayalım. İşaretlediğim kısımlardan 1 numaralı olan kısım Regex sorgusunu yazacağımız, yani metin içerisinde arama yapacağımız ifadeyi içeren kısım. 2 numaralı kısım ise içinde arama yapılacak olan metin. Gerçi bunu niye açıklıyorsam. Düşününce şimdi saçma geldi. Olsun, çoktan işaretledim bile. Tamam tamam, sıkılma emareleri gösterme okuyucum, bu yazıyı biraz kafam güzel yazıyorum da.

Öncelikle en basit senaryoyu ele alalım, hiçbir işimize yaramayacak olanı. Regex olarak dümdüz bir metin yazdığınızda bu doğrudan yazdığınız sorguyu metin içerisinde bulacaktır. Bu haliyle bir işe yaramasa da, karmaşık Regex sorguları içerisinde parça parça kullanacağınız için öğrenmeniz gerekiyor doğal olarak.

Ha, şeyi söylemeyi unutmuşum. Demin söylediğimin örneğini vereceğim de, ondan önce halihazırda yazılı olan sorguya bir bakalım:
```
([A-Z])\w+
```
Bunu ilerledikçe daha ayrıntılı olarak açıklayacağım fakat kısaca değinmem gerekirse bu büyük harfle başlayan ve birden fazla karakter içeren kelimeleri bulmayı sağlayacak olan bir Regex sorgusu. Buradaki parantezler baş harfleri ayrıca seçebilmemize yarıyor. Bu sorguyu parantez olmadan da yazabilirdik. Daha fazla foreshadowing yapmadan, spoiler vermeden giriş seviyesine geri dönelim.

Regex sorgusu olarak "expression" yazdık ve başımıza bu geldi:
![Regexr.com'un görüntüsü](/images/blog/regex/regex-2.png)

Sorgunun başındaki ve sonundaki / (slash) karakteri bizim eklediğimiz bir şey değil. Bu JavaScript'te Regex tanımlamanın yolu. Çoğu dilde Regex sorguları çift tırnak işareti içine yazılır, Javascript'te ise slash'ler arasına yazılıyor. Sondaki "g" karakteri ise global anlamına geliyor. Sorguyu metinde bir defa değil, birden çok defa bulmak için kullanılıyor. 

Şimdi kısaca temel Regex tanımlamalarının üzerinden geçelim. 


| İfade | Anlamı                       |
|-------|------------------------------|
| \s    | Boşlukları seçer             |
| \w    | Kelimeleri seçer             |
| .     | Herhangi bir karakteri seçer |

...
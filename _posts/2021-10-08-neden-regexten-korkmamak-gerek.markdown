---
layout: post
title: "Neden Regex'ten Korkmamak Gerek"
date: 2021-10-08 01:58:00 +0300
categories: blog
author: Hüseyin Karabaş
description: Regex'e nazikçe giriş
featured-image: /images/blog/regex/regex-cover.png
featured-image-alt: Regex'ten Korkma
categories: programlama regex
---
Çoğu yazılımcı genellikle Regex ismini duyduğu anda kaçacak delik arıyor. Tabii bunu anlamak kolay. Regex'i tanımlamak adına çok güzel bir ifade duymuştum: write-only language. Tıpkı yıllar önce, çocukluk yıllarında HTML ile web sayfaları oluşturmaya çalışırken Javascript kodlarının bize büyü gibi gelmesi gibi bir hissiyat yaratıyor Regex. Javascript kodlarını sayfamıza eklerdik ve o anlamsız görünen semboller, ifadeler sayfa kodlarına yapıştırıldığı anda havai fişekler patlardı, rengarenk yazılar sayfada dans ederdi, tarayıcı ekranı deprem efektiyle sallanırdı... Tek yapabildiğimiz ise bu işlevsel kodları kullanabilmek için bir yerlerden kopyalayıp yapıştırmaktı. Çünkü o dünya içine dalmak için çok komplike görünüyordu.

Regex sorgularını da yazılımcıların büyük çoğunluğu bu şekilde kullanıyor. Örneğin bir e-mail sorgulaması gerektiğinde bunun için bir Regex sorgusu aratarak bu sorunu çözme yolunu seçiyorlar. Ancak şunu belirtmekte fayda var, Regex yazmayı öğrendiğinizde birçok konuda işiniz çok kolaylaşacak. Bir metin içerisinde istediğiniz formata uyan her şeyi, dosya isimleri arasında istediğiniz formatta olanları seçip alabilecek, web sitelerinden çektiğiniz verileri ayıklayabilecek, bir dökümanda istemediğiniz kısımları silip sadeleştirebilecek, belki de bir dil için parser kodlayabileceksiniz. Üniversitede bir derste, dökümandaki fazlalık olan kısımları kullandığım metin editörü olan Sublime Text'in bul ve değiştir kısmındaki Regex seçeneğini aktive ederek ayıkladığımda, yanımdaki "bilgisayar mühendisi adayları" bana büyü yapıyormuşum gibi bakıyordu gfkjryjnok 

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


| İfade | Anlamı                                                    |
|-------|-----------------------------------------------------------|
| .     | Herhangi bir karakteri seçer                              |
| +     | Sağında bulunduğu karakterden bir veya daha fazla seçer   |
| *     | Sağında bulunduğu karakterden sıfır veya daha fazla seçer |
| ?     | Sağında bulunduğu karakterden sıfır veya bir tane seçer   |
| \s    | Boşlukları seçer                                          |
| \S    | Boşluk olmayanları seçer                                  |
| \w    | Kelimeleri seçer                                          |
| \W    | Kelime olmayanları seçer                                  |
| \d    | Rakamları seçer                                           |
| \D    | Rakam olmayanları seçer                                   |
| \b    | Kelime sınırlarını seçer                                  |

Bunlar oldukça temel ifadelerden birkaçı. Şimdi bunları bir cheat sheet edasıyla değil de, detaylandırarak anlamaya çalışalım. Escape karakterleriyle kullanılanların anlamlarını tahmin etmek zor değil, \s space (boşluk), \w word (kelime), \d digit (rakam) ve \b de boundry (sınır) anlamına geliyor. Akılda tutmak için İngilizcelerini bilmek yeterli.

Regexr uygulamasında expression olarak 

```
\s
```

yazdığınızda tüm boşlukların seçildiğini göreceksiniz. 

```
\s+
```
yazdığınızda bir veya daha fazla boşluk yan yana ise bunların seçildiğini göreceksiniz. Aynısını diğer tüm ifadeler için deneyebilirsiniz.

Alttaki metnin içerisinde birkaç sayı yazarak

```
\d+
```

ile bunları seçebilirsiniz.

Boundry ifadesi bir kelimenin başlangıcını ve bitişini işaretleyerek, örneğin belirlediğiniz kurala uygun bir kelime seçebilmenizi sağlar. Kendisi doğrudan bir karakter seçmez, yalnızca sınırları belirler. Fakat bu ifadeyi kullanabilmek için öncelikle başka bir ifadeden bahsetmem gerekiyor.

Regex'te köşeli parantezler ile tek bir karakter seçebilmek için özel kurallar belirleyebilirsiniz. Sonrasında ise bu kuralları birden fazla yan yana karaktere uygulamanız mümkün. Şöyle göstereyim:

```
[a-z]
```

bu ifade tek bir küçük harfi seçer. Aşağıdaki gibi yazdığınızda ise yan yana olan küçük harfleri seçecektir:

```
[a-z]+
```

Büyük harfleri seçebilmek için de şöyle bir kullanım gerekiyor:

```
[A-Z]
```

Sayılar içinse şöyle bir şey:

```
[0-9]
```

Tabii buradaki aralıklar özelleştirilebilir. Örneğin siz harflerin A'dan Z'ye tamamını değil de, B'dan L'ye kadarını almak istiyorsunuzdur. Öyle bir şeyi neden isteyesiniz bilemem ama, çok spesifik durumlar doğabilir. Aynısı sayılar için de geçerli, 4-8 gibi bir seçim yapabilirsiniz.

Buradaki tüm kullanımlar bir arada kullanılabilir ve tek bir karakter için olasılıklarınızı arttırabilirsiniz. Örneğin büyük ve küçük harf fark etmeden seçmek için şunu yazmak yeterli:

```
[a-zA-Z]
```

Söylediğim gibi, bu tek bir karakter seçecektir. Şimdi Regexr uygulamasında harflerden oluşan tüm kelimeleri seçmeyi deneyelim:

```
[a-zA-Z]+
```

![Tüm kelimelerin seçimi](/images/blog/regex/regex-3.png)

Karanlık teması olduğunu fark edince geçtim hemen. Şimdi, istiyorum ki yalnızca baş harfi büyük kelimeleri seçeyim. Bu durumda artık tek değil, iki koşuldan bahsetmemiz gerekecek: ilk harf ve kelimede geri kalan tüm harfler. İki adet köşeli parantez ifadesini yan yana kullanabiliriz:

```
[A-Z][a-z]*
```

Görüldüğü üzere, ilk harf için tek bir karakter seçtim. Hatırlarsanız asterisk (yıldız) işareti sıfır veya daha fazla karakter seçebiliyordu. Bir kelime yalnızca tek bir harften oluşabilir, "O" gibi. 

Şimdi "e" ile başlayan ve "n" ile biten kelimeleri seçelim. Şöyle bir şey denemekle başlayalım:

```
e[a-z]+n
```

Tabii burada bir sorun var.

![Örnek seçim](/images/blog/regex/regex-4.png)

Ben yalnızca bütün olarak kelimeleri seçmek istiyordum fakat bu ifade kelimelerin içine girip parçalarına falan dadanıyor. İşte burada bounty kaçış karakterini (\b) kullanabiliriz. İfadeyi \b karakterlerinin arasına sandviç yaparsak sorunumuz çözülecektir.

```
\be[a-z]+n\b
```

![Örnek doğru seçim](/images/blog/regex/regex-5.png)

Ancak bu koşula uyup, baş harfi büyük olanları da seçmek istiyoruz diyelim. Burada:

```
\b[E-Ee-e][a-z]+n\b
```

gibi mutant bir çözümde bulunabiliriz, ama yapmayalım onu. Çok da çirkin duruyor. Aslında köşeli parantezlerin içine istediğimiz harfleri tek tek yazmamız da mümkün. Örneğin şu şekilde bir ifade yazabiliriz:

```
[Ee]
```

Belki bunu öğrendikten sonra bu blog yazısının kapak resmindeki Regex ifadesinin hangi metinleri seçebileceğini anlamışsınızdır. Şimdi köşeli parantez değil de farklı bir yöntem kullanalım bunun için. Yeni bir operatöre değinelim.

"\|" operatörü programlama dillerindeki "veya" operatörü gibi davranır. İki koşuldan hangisi uygunsa onu seçer. Ancak bunu kullanabilmek için sorgumuzu parantez içine almamız, yani gruplandırmamız gerekecek. Kısaca sadece bu kısma değinirsek şu şekilde olacak:

```
(E|e)
```

Şimdi bunu asıl sorguya eklersek:

```
\b(E|e)[a-z]+n\b
```

Bunun da ekran görüntüsünü koymayayım artık.

Bir kullanımdan daha bahsedelim. Eğer sonsuz değil de belirli sayıda karakteri seçmek istiyorsam, ifadenin yanında küme parantezleri kullanabilirim.

```
[a-z]{2}
```

şeklindeki bir kullanım yan yana iki küçük harf seçecektir. Soluna ve sağına \b karakterini ekleyerek iki harften oluşan kelimeleri seçebilirsiniz. Bu kullanımda tek bir sayı değil, bir aralık da belirtmeniz mümkün. İki, üç veya dört harften oluşan bir seçim yapmak istiyorsanız:

```
[a-z]{2, 4}
```

gibi bir kullanım yeterli olacaktır. Sanırım bu yazı için bu kadarlık yeter. Zaten yarısını başladıktan birkaç hafta sonra yazdım. Bu yazıyı bir serinin ilk yazısı olarak düşünüyorum ve bir sonraki Regex yazısında da metnin başı, metnin sonu, köşeli parantez içinde özel karakterlerin kullanımı, hariç tutma, gruplama gibi kısımlara değinirim muhtemelen. Genelde ilk olarak bunlar anlatılır fakat ben böyle bir yol çizmeyi tercih ettim. Geleceğe selamlar, hadi ben gidiyorum.


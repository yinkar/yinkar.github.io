---
layout: post
title: Wayback Machine İpuçları
date: 2021-11-06 14:20:00 +0300
author: Hüseyin Karabaş
description: archive.org'un zaman makinesini daha detaylı kullanma yolları  
featured-image: /images/blog/wayback-machine/wayback-machine-cover.png
featured-image-alt: Wayback Machine
categories: internet arşiv
---

İnternetin en kullanışlı araçlarından biri [Archive.org](https://archive.org)'un [Wayback Machine](https://web.archive.org)'i. Ben nostalji bağımlısı olduğum için kendisini oldukça fazla kullanıyorum. Bunun dışında bir kaynak göstermek gerektiğinde kaynağın aynı şekilde kalacak bir formatını içeren bağlantı verilmesi için de kullanılıyor. [Geçenlerde yaşanan](https://twitter.com/esesci/status/1441079965752070151), bir ders kitabının kaynakça kısmında verilen bir adresin oluşturduğu skandalımsı durum, bunun neden önemli olduğunun güzel bir örneği. Wikipedia'da kaynakça kısmında sıkça Wayback Machine adreslerinin kullanıldığını görebilirsiniz.

Öncelikle bir websiteniz varsa, sayfalarını Wayback Machine'e kaydetmeniz sizin için faydalı olacaktır. Çocukken yaptığım siteleri keşke zamanında kaydetseydim diyorum, şimdi neredeyse hiçbirine Wayback Machine de dahil hiçbir yerden erişemiyorum. Bunu yapmak için Wayback Machine'in ana sayfasında sağ altta bulunan formu kullanabilirsiniz.

![Wayback Machine sayfa kaydetme](/images/blog/wayback-machine/wayback-machine-1.png)

Formu gönderdikten sonra açılan sayfayı da onayladığınızda işleminizin gerçekleştiğini göreceksiniz. Şimdi çok daha faydalı ipuçlarına geçelim.

Wayback Machine'de arama yapabilirsiniz. Çok detaylı bir arama imkanı sunmasa da, çoğu zaman geçmişteki websitelerinde arama yapmak istediğinizde size istediğiniz sonucu sunacaktır. Bunun için tek yapmanız gereken, Wayback Machine'in ana sayfasındaki kutucuğa bir site adresi yerine bir anahtar kelime yazmak.

![Wayback Machine'de arama yapmak](/images/blog/wayback-machine/wayback-machine-2.png)

Adres çubuğunun aşağıdaki gibi değiştiğini görüyorsunuzdur.

![Wayback Machine adres çubuğu](/images/blog/wayback-machine/wayback-machine-3.png)

Ben genelde web arayüzünden önce adres çubuğunu kullanırım. Formatı görüyorsunuz:

```
https://web.archive.org/web/*/msn%20ifadeleri
```

Anahtar kelime yerine şunun gibi bir website adresi yazalım:

```
https://web.archive.org/web/*/hoppala.com
```

Sonuç şu şekilde olacak:

![Wayback Machine site kayıtları](/images/blog/wayback-machine/wayback-machine-4.png)

Gördüğünüz gibi, adresin kayıtları çıkıyor. Ben Wayback Machine'i kullanacağım zaman adres çubuğuna ``web.archive.org/web/*/`` ve ardından aramak istediğim kelime veya kayıtlarını bulmak istediğim websitenin adresini yazarak kullanırım. İşler böyle daha hızlı oluyor. Şimdi bu formatın ne anlama geldiğine bakalım.

Herhangi bir kayda tıkladım ve adres çubuğu şu şekilde değişti:

```
https://web.archive.org/web/20050205034905/http://www.hoppala.com/
```

Ekran görüntüsü de şu şekilde:

![Wayback Machine site kaydı](/images/blog/wayback-machine/wayback-machine-5.png)

Anlayacağınız üzere bir önceki adreste yer alan ``*`` ifadesi tüm kayıtlar anlamına geliyordu. Şimdi ise bir zaman damgası (timestamp) var. Bu formatı ezberlemenize hiç gerek çok açıkçası, kısaca ``gün-ay-yıl-saat-dakika-saniye``, daha doğru bir formatla ``YYYYMMDDhhmmss`` şeklinde. 

Şimdi sayfanın kaynağını inceleyelim. <kbd>Ctrl</kbd> + <kbd>U</kbd> veya Mac kullanıyorsanız <kbd>Option</kbd> + <kbd>Command</kbd> + <kbd>U</kbd> kısayoluyla hızlıca açabilirsiniz. Sayfanın üst kısımlarında Wayback Machine'in kendi kodları olduğunu göreceksiniz, onları atlayalım. Kaydedilmiş sitenin, resimlerinin kayıttan çağrıldığı kısımdaki URL'lerinde bir farklılık göreceksiniz.

![Wayback Machine resim adresi](/images/blog/wayback-machine/wayback-machine-6.png)

Adres şu şekilde:

```
https://web.archive.org/web/20070614035910im_/http://www.hoppala.com/images/index_03.gif
```

Görüldüğü gibi, zaman damgası kısmının sonunda bir flag var. Bu onun bir resim olduğunu gösteriyor. Şimdi o flag'le ve o flag'i silerek resme gidelim:

![Wayback Machine resim adresi](/images/blog/wayback-machine/wayback-machine-7.png)

Flag'i sildiğimizde normal bir sayfa gibi açıldı ve Wayback Machine'in çerçevesi de eklendi. Buradan aklınıza şu gelebilir: getirilen bir sayfanın zaman damgasının sonuna ``im_`` eklediğimizde o sayfada Wayback Machine çerçevesi çıkmayacak ve normal bir siteymiş gibi link verebileceğiz. Bu yöntem çalışıyor, ama doğru bir yöntem sayılmaz. Bunun için farklı flag'leri var Wayback Machine'in. Şimdi onları bir tablo olarak vereyim:

| Flag   | İsim       | Açıklama                                                                        |
|--------|------------|---------------------------------------------------------------------------------|
| id_    | Identity   | Sayfada hiçbir değişiklik yapmadan, kaydedildiği gibi getirir                   |
| js_    | JavaScript | Sayfayı JavaScript olarak işaretlenmiş şekilde getirir                          |
| cs_    | CSS        | Sayfayı CSS olarak işaretlenmiş şekilde getirir                                 |
| im_    | Image      | Sayfayı resim olarak getirir                                                    |
| if_/fw_| Iframe     | Sayfayı normal bir formatta, fakat Wayback Machine'in çerçevesi olmadan getirir |

Anlayacağınız üzere bir sayfayı getirirken id_, if_ veya fw_ flag'ini kullanmanız, çerçeveyi göstermemek için uygun olacaktır.

![Wayback Machine çerçevesiz sayfa](/images/blog/wayback-machine/wayback-machine-8.png)

Flag'lerin tam listesine Wikipedia'daki [şu](https://en.wikipedia.org/wiki/Help:Using_the_Wayback_Machine) adresten eriştim. Belki orada işinize yarayacak başka bilgiler de bulursunuz.
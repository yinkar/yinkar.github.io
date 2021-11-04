---
layout: post
title: Hex Renklerle ilgili İpuçları
date: 2021-11-04 19:57:00 +0300
author: Hüseyin Karabaş
description: On altılık renk değerleriyle ilgili küçük tüyolar
featured-image: /images/blog/hex/hex-1.png
featured-image-alt: Hex Renkler
categories: programlama css renkler
---

Genelde web üzerinde kullanılan hexadecimal, yani on altılı değerle gösterilen renkleri öğrenirken insanların atladığı birçok nokta oluyor ve renk kodlarını yalnızca ezberlemeyi tercih ediyorlar. Oysa bu renk kodlarına daha detaylı bir bakış atmak işinizi birçok yönden kolaylaştıracaktır.

On altılı sayı sistemini bildiğinizi umuyorum. Fakat bilmeyenler için yine de üstünden geçelim. Günlük hayatta kullandığımız sayı sistemi 10'luk sistemdir ve ``decimal`` olarak adlandırılır. 10 adet rakamdan oluşur, bunları biliyorsunuz: 0, 1, 2, 3, 4, 5, 6, 7, 8 ve 9. Bunun yanı sıra bilişimin temeli olan ikili sayı sistemi (binary) vardır. İkilik sistemde ise iki adet rakam vardır: 0 ve 1. Tüm sayılar bu sistemde 0 ve 1 ile gösterilir. Örneğin 13 sayısı binary olarak ``1101`` şeklinde yazılır. Bunun dışında octal adını verdiğimiz sekizli sayı sistemi vardır, bunda da 0'dan 7'ye kadar 8 adet rakam bulunur. 10'dan küçük olan sayı sistemlerini göstermemiz kolay, var olan rakamların bir kısmıyla gösterebiliyoruz. Fakat sayı sistemi 10'dan büyük olursa o zaman ne olacak? İşte on altılı sistem yani hexadecimal sistem bunun bir örneği. Rakamları şu şekilde: 

```
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, a, b, c, d, e, f
```

Dikkat ederseniz, 10'dan büyük "rakamlar" alfabedeki harflerin bir kısmıyla gösteriliyor. Burada rakam diyorum çünkü 16'lık sistemde 11, 12, 13, 14 ve 15, a, b, c, d, e sembolleriyle gösterilen birer rakam. Hexadecimal'in bir kısaltması olarak bu sistemdeki sayılardan bahsederken ``hex`` ismini kullanıyoruz. Harflerin büyük veya küçük olarak gösterilmesinde herhangi bir sorun yok.

Programlama dillerinde farklı sistemlerden sayılar farklı öneklerle gösterilir. Binary için ``0b1000100``, octal için ``0o104`` gibi bir kullanım varken hexadecimal için ise ``0x44`` gibi bir kullanım vardır. CSS ve HTML gibi dillerde hex formatındaki renk kodları ``#`` işaretiyle başlar. Farklı dillerde hex kodlarının ``0x`` ile başladığını görebilirsiniz.

Şimdi renk kodlarını ele almaya başlayalım:

```
#000000
```

Bu hex renk kodu olarak ifade edilebilecek en küçük değer. Siyah rengin renk kodu.

```
#ffffff
```

Bu ise hex renk kodu olarak ifade edilebilecek en büyük değer ve beyaz rengi veriyor.

Tabloyla bazı renk kodlarını gösterelim:

|   Renk kodu    |    Anlamı    |
|----------------|--------------|
|   #ff0000      |    Kırmızı   |
|   #00ff00      |    Yeşil     |
|   #0000ff      |    Mavi      |

Tabloya bakınca bir şey dikkatinizi çekmiş olmalı. Her ikişer basamak aslında temel renkleri simgeliyor ve buradan da anlaşılıyor ki aslında hex kodları RGB (red-green-blue) renk değerlerini yazmanın başka bir yolu. ``ff`` değeri decimal sistemde 255'e denk geliyor. Yani aslında 0 ile 255 arasında üçer farklı renk seçimi yapıyoruz.

RGB'de olduğu gibi farklı karışımlarla farklı renkler elde edebiliyoruz. Şu şekilde kırmızıyla yeşili karıştıralım:

```
#ffff00
```

Ortaya çıkan renk şöyle olacak:

<div style="background-color: #ffff00; width: 50px; height: 50px"></div>

Hex kodlarını 6 haneli olarak yazabileceğiniz gibi 3 haneli olarak yazmanız da mümkün. Daha dar bir skala sunsa da, temel renkler için kullanımı daha rahat olacaktır.

|   Renk kodu    |    Anlamı    |
|----------------|--------------|
|   #000         |    Siyah     |
|   #fff         |    Beyaz     |
|   #f00         |    Kırmızı   |
|   #0f0         |    Yeşil     |
|   #00f         |    Mavi      |

Hex kodlarındaki her değeri aynı tutarsanız grinin çeşitli tonlarını elde edeceksiniz:

<div style="background-color: #000; width: 70px; height: 20px">
    #000
</div>
<div style="background-color: #111; width: 70px; height: 20px">
    #111
</div>
<div style="background-color: #222; width: 70px; height: 20px">
    #222
</div>
<div style="background-color: #333; width: 70px; height: 20px">
    #333
</div>
<div style="background-color: #444; width: 70px; height: 20px">
    #444
</div>
<div style="background-color: #555; width: 70px; height: 20px">
    #555
</div>
<div style="background-color: #666; width: 70px; height: 20px">
    #666
</div>
<div style="background-color: #777; width: 70px; height: 20px">
    #777
</div>
<div style="background-color: #888; width: 70px; height: 20px">
    #888
</div>
<div style="background-color: #999; width: 70px; height: 20px; color: #000">
    #999
</div>
<div style="background-color: #aaa; width: 70px; height: 20px; color: #000">
    #aaa
</div>
<div style="background-color: #bbb; width: 70px; height: 20px; color: #000">
    #bbb
</div>
<div style="background-color: #ccc; width: 70px; height: 20px; color: #000">
    #ccc
</div>
<div style="background-color: #ddd; width: 70px; height: 20px; color: #000">
    #ddd
</div>
<div style="background-color: #eee; width: 70px; height: 20px; color: #000">
    #eee
</div>
<div style="background-color: #fff; width: 70px; height: 20px; color: #000">
    #fff
</div>


Gri tonlar için ``#c0c0c0``, ``#1b1b1b`` gibi ara değerler de kullanmanız mümkün.

6 haneli hex değerleri kullanırken sona 2 hane daha ekleyerek RGBA formatında kullanabilirsiniz, yani renge saydamlık özelliği verebilirsiniz. 3 haneli hex değerlerinde de bu doğal olarak 1 hane fazla olacak.

%50 opaklığa sahip, yani yarısaydam bir kırmızı renk şöyle renk koduyla oluşturulabilir:

```
#ff000088
```

```
#f008
```


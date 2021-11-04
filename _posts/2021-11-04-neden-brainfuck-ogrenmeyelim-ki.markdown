---
layout: post
title: Neden Brainfuck Öğrenmeyelim ki
date: 2021-11-04 17:31:00 +0300
author: Hüseyin Karabaş
description: Brainfuck isimli ezoterik programlama diline giriş 
featured-image: /images/blog/brainfuck/brainfuck-cover.png
featured-image-alt: Brainfuck programlama dili
categories: programlama ezoterik brainfuck
---

Bir dilin karmaşık bir yapısıyla karşılaşıldığında genelde Brainfuck örneği veriliyor; örneğin Regex ifadeleri ve programlama dillerindeki bazı syntactic sugar'lar. Onlara da değiniriz belki ileride. Brainfuck ise muhtemelen makine diliyle, assembly'lerle uğraşmış bir insana o kadar karmaşık gelmeyecektir. Aslında yapı olarak onların yapısının küçük bir kısmının değişik bir yorumunu barındırıyor.

Dün biraz Brainfuck öğrendim. Uzun zamandır aklımdaydı aslında. Youtube'a ismini yazıp, geçmiş aramalardan görerek hatırlayabilmek istiyordum fakat Youtube, üzerine vazife olmadan brainfuck kelimesini sansürlüyor. Böyle zırva özellikleri kapatamıyorsun da.

Brainfuck bir ezoterik programlama dili olarak geçiyor. İleride ezoterik programlama dillerini konu alacağım bir yazı olacak. Aslında birçoğu için parodi programlama dili daha uygun bir isim olabilirdi. Brainfuck'ın oluşturulmasındaki temel amaç, en küçük boyuttaki derleyiciye sahip olan bir dil yaratmak. Brainfuck o kadar temel kurallara sahip ki, dili öğrendikten sonra derleyicisini veya yorumlayıcısını kodlamayı birçok insan başarabilecektir. Kendisi turing-complete bir dil, bu da demek oluyor ki bu dil ile teorik olarak tüm problemleri çözebilecek programlar yazılabilir.

Brainfuck dilinin teorik kısmını öğrenmek çok basit aslında, vakit alacak olan kısım dilin yapısı gereği geliştirilmek durumunda olan algoritmalar. Şimdi hafif hafif dilin yapısına giriş yapalım.

Brainfuck dili sekiz tane karakterden oluşuyor. Bu ifadeler: ``<>+-[].,`` şeklinde. Bunlar dışında dosyaya yazılacak herhangi bir karakter görmezden geliniyor ve bir nevi yorum satırı görevi görüyor.

Brainfuck diliyle kodlama yaparken yaptığımız esas işlem aslında hafızayı manipüle etmek. Elimizde herbiri birer Byte taşıyan, 30000 adet hafıza bloğu yer alıyor. Biz bu hafıza şeridi üzerinde ileri geri giderek içlerinde olan değerleri arttırıp azaltıyoruz. Bunun dışında çıkmak için tek koşulun bulunduğumuz hafıza bloğunun içindeki değerin 0 olması olduğu döngüler yazabiliyoruz ve çıktı alıp girdi verebiliyoruz.

Aslında bahsettiğim şu operatör karakterlerine bakarak neyin ne için kullanılacağını aşağı yukarı anlayabilirsiniz. Şimdi bir tablo ile detaylandıralım:

| Operatör | Anlamı                                                         |
|----------|----------------------------------------------------------------|
| <        | Hücreler arasında bir geri git                                 |
| >        | Hücreler arasında bir ileri git                                |
| +        | Üzerinde bulunulan hücrenin değerini 1 arttır                  |
| -        | Üzerinde bulunulan hücrenin değerini 1 azalt                   |
| [        | Hücrenin değeri 0'dan farklıysa devam eden bir döngü oluştur   |
| ]        | Döngü kod bloğunu kapat                                        |
| ,        | Girdi olarak 1 karakter al                                     |
| .        | Çıktı olarak 1 karakter bastır                                 |

Şimdi insan der ki, "e hocam, burada yalnızca bu karakterler var. Elimizde metne benzeyen hiçbir şey yok". Doğru. İnsanın doğal olarak aklına şu geliyor: "bir hello world örneği yazsak, nasıl yazacağız?".

Brainfuck dilinde girdi ve çıktı sözkonusu olduğunda hücrelerin değerleri birer ASCII karakteri olarak yorumlanıyor. Örneğin üzerinde bulunduğumuz hafıza bloğunun değeri 65 olduğunda, ``.`` karakteriyle ekrana ``A`` çıktısını basıyoruz.

Aslında [/toys](Toys) sayfasında bir ASCII tablosu oluşturmayı düşünüyorum, tercihen markdown kullanarak. Bunun yanında periyodik tablo, elektromanyetik spektrum, akor cetveli gibi farklı disiplinlerdeki farklı referans tablolarını da kodlayarak bu siteye eklemek gibi bir fikrim var. Şimdilik ASCII tablosundaki rakamları ve büyük ve küçük harfleri gösteren bir tablo oluşturayım buraya:


| #   | Karakter |
|-----|----------|
| 48  | 0        |
| 49  | 1        |
| 50  | 2        |
| 51  | 3        |
| 52  | 4        |
| 53  | 5        |
| 54  | 6        |
| 55  | 7        |
| 56  | 8        |
| 57  | 9        |
| 65  | A        |
| 66  | B        |
| 67  | C        |
| 68  | D        |
| 69  | E        |
| 70  | F        |
| 71  | G        |
| 72  | H        |
| 73  | I        |
| 74  | J        |
| 75  | K        |
| 76  | L        |
| 77  | M        |
| 78  | N        |
| 79  | O        |
| 80  | P        |
| 81  | Q        |
| 82  | R        |
| 83  | S        |
| 84  | T        |
| 85  | U        |
| 86  | V        |
| 87  | W        |
| 88  | X        |
| 89  | Y        |
| 90  | Z        |
| 97  | a        |
| 98  | b        |
| 99  | c        |
| 100 | d        |
| 101 | e        |
| 102 | f        |
| 103 | g        |
| 104 | h        |
| 105 | i        |
| 106 | j        |
| 107 | k        |
| 108 | l        |
| 109 | m        |
| 110 | n        |
| 111 | o        |
| 112 | p        |
| 113 | q        |
| 114 | r        |
| 115 | s        |
| 116 | t        |
| 117 | u        |
| 118 | v        |
| 119 | w        |
| 120 | x        |
| 121 | y        |
| 122 | z        |


Python çok tatlı dil değil mi?

![Python ASCII alfanumerik tablo oluşturma](/images/blog/brainfuck/brainfuck-1.png)

Şimdi Brainfuck'a geri dönelim. Boş bir programda bahsettiğim şu hafıza şeridi şu şekilde görünecektir:

```
| 0 | 0 | 0 | 0 | 0 | ...
  ^
```

Bilişimde Turing makinesi adlı bir konsept vardır. Bunun yapısı da ona oldukça benziyor. Akla gelebilecek ve teorik olarak var olabilecek her programı oluşturabilmeyi sağlamasının nedeni de bu. Tüm programlama dilleri çalıştığında birer turing makinesi oluşturur ve bu şekilde problemleri çözerler. Turing makinesini yalnızca fiziksel bir makine olarak düşünmeyin, soyut olarak da, emülasyon şeklinde de var olabilir. Fiziksel olarak da kullanılması mümkün elbette.

Turing makinesine de ileride bir yazıda değiniriz belki. Basitçe açıklamak gerekirse:

Turing makinesi konseptinde bir okuma kafası olur, makinenin ne yapması gerektiğini belirleyen komutları içeren bir geçiş tablosu olur ve teorik olarak sonsuz kabul edilen, teyp diyebileceğimiz bir hafıza şeridi olur. Makine bu şeritten okur, okuduğu değere göre bir eylem gerçekleştirebilir ve bu şeride bir değer yazabilir.

Bizim de burada, ``^`` sembolüyle gösterdiğimiz bir okuyucu kafa var. Bu bir pointer'dır, C'deki kullanımlarına da girebiliriz, şimdilik bu yazıda girmeyi düşünmüyorum. Pointer, bir değişkenin hafızadaki adresini tutar. Biz istediğimiz zaman o pointer'ı kullanarak o adrese erişebiliriz veya pointer'ın değerini değiştirerek pointer'ın işaret ettiği adresi kaydırabiliriz.

``+`` sembolünün, işaret edilen hücredeki değeri bir arttırdığını söylemiştim. Şimdi şöyle bir program yazalım:

```
+
```

Bu program çalıştığında hafıza blokları şu hali alacak:

```
| 1 | 0 | 0 | 0 | 0 | ...
  ^
```

Şimdi kafanın yeriyle oynayalım. Şöyle bir program yazalım:

```
>
```

Çalıştığında hafıza blokları bu şekilde olacak:

```
| 0 | 0 | 0 | 0 | 0 | ...
      ^
```

Tek yaptığı pointer'ı bir sağa kaydırmak oldu. Bunları bir arada kullanabiliriz.

```
+++++ > +++ > ++++ < -
```

Bu operatörler dışında hiçbir karakterin yorumlanmadığını söylemiştim, o yüzden daha anlaşılır gözükmesi için boşluklar ekliyorum. Şimdi bu kod çalıştığında yapı en son şöyle olacak:

```
| 5 | 2 | 4 | 0 | 0 | ...
      ^
```

Program başladığında bulunulan ilk hücrenin değerini 5 arttırdık, bir sonraki hücreye geçtik ve onu 3 arttırdık, bir sonraki hücreye de geçerek onu da 4 arttırdık. Sonra bir önceki hücreye geri dönüp onu bir azalttık. 

Değerleri ASCII tablosunun sınırlarını aşmayacak şekilde istediğiniz gibi arttırabilirsiniz. Bu arada bu kodları denemek için herhangi bir Brainfuck interpreter'ı bulabilirsiniz. Hatta [şuradaki](https://fatiherikli.github.io/brainfuck-visualizer/) gibi bir görselleştiriciyi de kullanabilirsiniz. Ben de bir tane kodlamayı düşünüyorum.

Tabii gördüğünüz gibi bunları yazıyoruz, ama elimize bir şey geçmiyor. Şimdi ekrana artık bir şeyler basalım.

En basit şekilde ``A`` harfini şöyle basabileceğiniz aklınıza gelmiştir:

```
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ .
```

Hafıza blokları şu şekilde olacak:

```
| 65 | 0 | 0 | 0 | 0 | ...
  ^
```

Çıktı:

```
A
```

İlk hücreye 65 yazıldı ve en son ``.`` operatörüyle de ekrana ASCII tablosundaki ``65`` numaralı karakter olan ``A`` harfi basıldı. **Bunu yapmayın tabii.** Böyle saçmalık mı olur, yoksa programlamanın anlamı mı kalır?

Bunu optimize etmeden önce metnin geri kalanını ekrana basmanın yolunu da göstereyim. Yukarıdaki ifadeye ``+.`` eklediğinizde ekrana ``B`` karakteri de basılacak, yine ``+.`` eklediğinizde ``C`` de basılacak ve çıktı ``ABC`` olacak. Çünkü değer 65'ken basıldı, 66 oldu ve onun değeri de basıldı, son olarak da 67 oldu ve onun değeriyle beraber bu üçü ekrana basılmış oldu.

Bunu daha uygun bir şekilde yapmanın yolu elbette döngü kullanmak:

```
++++++++ [ > ++++++++ < - ] > + .
```

Hafıza:

```
| 0 | 65 | 0 | 0 | 0 | ...
      ^
```

Çıktı:

```
A
```

Bunu görünce Brainfuck'ın adına yakışır noktalara gelmeye başladığımızı düşünebilirsiniz. Aslında çok da büyük bir şey yapmadık, değiştirdiğimiz kısım yalnızca bir çarpma işleminden ibaretti. 8 ile 8'i çarpttık, son olarak da 1 ekledik ve 65'e ulaştıktan sonra değeri ekrana bastık.

65'e ulaşmak için herhangi iki sayıyı kullandım, siz daha farklı sayılar kullanabilirsiniz. İlk olarak ilk hücrenin değerini 8'e çıkartıyorum ve bir döngü başlatıyorum. Bu döngünün yaptığı şey aslında bir sonraki hücreye gidip orayı 8 arttırmak ve geriye dönüp ilk hücrenin değerini her adımda 1 eksiltmek. Her adımda 1 eksilterek o sayı kadar çalışmasını sağlıyorum. Yani ikinci hücrenin değeri 8 kere, 8 arttırılıyor, bu da çarpma demek zaten. Sürekli 1 azaltılan ilk hücrenin değeri 0'a ulaşınca döngüden çıkılıyor ve ``>`` operatörüyle ikinci hücreye gidip ``+`` ile ``64`` olan değerini 1 arttırarak ``.`` ile ekrana basıyoruz.

Bunu, sonucu ilk hücrede olacak şekilde hesaplamak isteseydiniz şöyle olurdu:

```
> ++++++++ [ < ++++++++ > - ] < +.
```

Hafıza:

```
| 65 | 0 | 0 | 0 | 0 | ...
  ^
```

Çıktı:

```
A
```

Özetle, şu formatta bir kod gördüğünüzde bunun, sonucu ikinci hücrede olacak olan bir çarpma işlemi olduğunu bilin:

```
{ilk_sayı_kadar_artı} [ > {ikinci_sayi_kadar_artı} < - ]
```

Buraya kadar öğrendiklerinizle, bir "hello world" uygulaması yazabilmeniz mümkün. Ben şöyle bir örnek oluşturayım:

```
>+++++++++[<++++++++++>-]<-.>+++[<+++++>-]<+.+++++.---.>+++[<--->-]<-.>++++[<++++>-]<+.
```

![Brainfuck örneği](/images/blog/brainfuck/brainfuck-2.png)

``bf`` isimli Brainfuck yorumlayıcısına Debian temelli Linux dağıtımlarında ``apt`` ile ulaşabilirsiniz. 

Input alma konusunda da çok kısa değineyim. Programda ``,`` kullandığınız yerde bir karakter girmeniz beklenir. Bu karakter alındığında karakterin ASCII değeri o an bulunulan hücreye yazılır.

Bu yazı bu kadar yeterli. Zaten yorgun kafayla yazdım, hatalar olabilir. Geleceğe selamlar, ben gidiyorum.
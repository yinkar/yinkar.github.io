---
layout: post
title: Arama Sonuçlarından Çöp Siteleri Kaldırmak
date: 2022-01-11 07:40:00 +0300
author: Hüseyin Karabaş
description: Arama motoru kullandığınızda sürekli karşılaştığınız leş manzarayı engellemek
featured-image: /images/blog/temiz-arama-sonuclari/temiz-arama-sonuclari-cover.png
featured-image-alt: Arama sonuçlarındaki çöp siteleri
categories: internet
---

Eminim her gün yüzlerce defa karşılaşıyorsunuzdur, Google gibi bir arama motorunda arama yaparsınız ve sonuçlar öylesine çöplük halindedir ki aradığınızı bir türlü bulamazsınız. Neyden bahsettiğimi biliyorsunuz; haber sitesi olduğunu iddia eden, birçoğu çağın gerisinde kalmış ve var olmaya devam etmek için çırpınan web siteleri. Haber sunmak gibi bir dertleri olmadığı için bunları haber sitesi olarak adlandırmıyorum. Özellikle insanların arama yapacağı kelimeleri seçerek, o konuda sayfalar oluştururlar ve sonuçları işgal ederler. Bayram tatilinin tarihini aratırsınız, bunlar çıkar, bir kelimenin doğru yazılışını aratırsınız, bunlar çıkar. Çıkan bu sayfaları da içerikten yoksundur, çöplük halindeki onca boş laf kalabalığının arasına tek kelimelik bilgiyi -eğer şanslıysanız o da- gizlerler. Haber diye sundukları içerikleri de galeri diye, farklı farklı sayfalara bölerek sunmaları ve clickbait yapmaları konusuna da değinmiyorum.

Bu siteleri engellemek için tabii bu siteleri önce bulmak gerekiyor. Ben size yazının devamında elimdeki listeyi vereceğim ama kendiniz bulmak istiyorsanız, Google'da "erkek isimleri", "bebek isimleri" "varolmak nasıl yazılır" vesaire gibi kelimelerle arama yapmanız yeterli. Şimdi daha iyi anlıyor musunuz beni?

Bilgisayarda, tarayıcı üzerinde, adres çubuğuna kelimeleri yazarak arama motorlarını kullandığınızı varsayıyorum. Öncelikle arama sonuçlarından bu siteleri gizlemek için bir eklenti kullanabilirsiniz. Bunu sağlayan birkaç eklenti var. [Şunu](https://chrome.google.com/webstore/detail/personal-blocklistnot-by/cbbbhelcpfjhdcncigdlkabmjbgokmpg?hl=en) bir deneyebilirsiniz. Daha önceden kısa bir süreliğine kullandığım eklentiyi arıyordum, ona bakarken tweet'lerimin arasında şuna denk geldim:

![0 Dolar kaç TL](/images/blog/temiz-arama-sonuclari/temiz-arama-sonuclari-1.jpg)

A-a nereye? Çileden mi çıkıyorsunuz. Bekleyin biraz daha.

Eklentiyi bulamadım, belki de o verdiğimdi. Hiç hatırlamıyorum. Sorun değil, zaten eklenti kullanmanızı tavsiye etmiyorum. Tarayıcı eklentileri web sayfalarına JavaScript kodu olarak eklenir ve belleği işgal eder. Ayrıca güvenilirlik de bir başka konu. Yalnızca bilinen bir adı olan eklentileri kullanmakta yarar var.

Biz bu sorunu çözmek için tarayıcı ayarlarındaki "Arama Motorlarını Yönet" kısmını kullanacağız. Ben Brave Browser kullanıyorum, göstereceğim her adım Chromium tabanlı tüm tarayıcılarda aynı olacaktır. Diğer tarayıcılarda da illaki benzerdir.

Öncelikle tarayıcının menüsüne girin. Brave Browser'da üç bar ``☰``, Chrome'da üç nokta ``⋮`` şeklindedir. Oradan ``Ayarlar`` sayfasına girin.

![Brave Browser menüsü](/images/blog/temiz-arama-sonuclari/temiz-arama-sonuclari-2.jpg)

Ayarlar sayfasında ``Arama motorlarını yönet`` şeklinde bir arama yaptığınızda en altta aradığımız sonucun çıktığını göreceksiniz. İngilizce kullanıyorsanız ``Manage search engines`` şeklinde aratın.

![Arama motorlarını yönet](/images/blog/temiz-arama-sonuclari/temiz-arama-sonuclari-3.jpg)

Görüldüğü üzere burası adres çubuğunda arama yapabileceğiniz arama motorlarını yönetebileceğiniz kısım. Varsayılan arama motorunun Google olduğunu varsayıyorum. Tüm bu arama motorlarının birer sorgu URL'si var. Google'ınkine bakarsak şöyle bir şey olduğunu göreceğiz: ``{google:baseURL}search?q=%s&{google:RLZ}{google:originalQueryForSuggestion}{google:assistedQueryStats}{google:searchFieldtrialParameter}{google:iOSSearchLanguage}{google:prefetchSource}{google:searchClient}{google:sourceId}{google:contextualSearchVersion}ie={inputEncoding}``. Tarayıcının burada yaptığı tek şey, yazdığımız kelimeyi arama motorunun adresine ekleyerek o adrese bizi yönlendirmek. Bu sorgu URL'si de o adresin formatını taşıyor. Görüldüğü üzere bu anlamsız uzun, çünkü tarayıcı varsayılan olarak arama yaparkenki istatistiki bilgileri Google'a göndermek istiyor. Bundan da kurtulalım. Bizim işimize yarayacak kısımlar yalnızca arama motorunun adresi ve sorguyu sembolize eden ``%s`` değeri. Bu adresi şöyle yazabiliriz:
```
{google:baseURL}search?q=%s
```

``{google:baseURL}`` kısmını ``https://google.com/search?q=`` olarak da değiştirebilirsiniz, oranın hiçbir esprisi yok. Şimdi biz bu adrese eklemeler yapacağız.

Biliyorsunuzdur, Google sonuçlarını filtrelemek için birkaç güzel anahtar kelime ve operatör vardır. Bize burada iki tanesi lazım olacak: arama sonuçlarının istediğimiz siteden olmasını sağlayan ``site:`` ifadesi ve arama sonuçlarından istediğimiz ifadeleri çıkartmak için kullanabileceğimiz ``-`` operatörü. Bu ikisini kombine edeceğiz ve arama sonuçlarından istediğimiz siteleri çıkaracağız.

Örneğin Google'da instagram araması yaptığınızda doğal olarak en başta instagram.com adresi çıkacaktır, fakat ``instagram -site:instagram.com`` şeklinde bir arama yaptığınızda çıkan sonuçlardan hiçbirinin instagram.com'dan olmadığnıı göreceksiniz.

Anlayacağınız üzere sorgu URL'sine ``-site:...`` ifadesini ekleyeceğiz. Tabii araya boşluk da koymak lazım. Boşluk karakterini URL'lerde ``+`` veya ``%20`` ile gösterebiliriz. Biz burada + kullanalım.

Şimdi başlayalım. Sayfadaki ``Ekle`` butonuna tıklayın ve "Arama motoru" kısmına istediğiniz ismi, "Anahtar kelime" kısmına istediğiniz ifadeyi girin. Varsayılan yapmak istemezseniz, adres çubuğuna bu belirlediğiniz anahtar kelimeyi yazarak <kbd>Tab</kbd> tuşuna bastığınızda arama motorunuzda arama yapabilirsiniz. "Sorgu yerine %s olan URL" kısmına da ``{google:baseURL}search?q=%s+-site:birincisite.com+-site:ikincisite.com...`` şeklindeki sorgunuzu gireceksiniz.

![Arama motoru ekle](/images/blog/temiz-arama-sonuclari/temiz-arama-sonuclari-4.jpg)

Benim kendi oluşturduğum sorgu şu şekilde:
```
{google:baseURL}search?q=%s+-site:hurriyet.com.tr+-site:ahaber.com.tr+-site:milliyet.com.tr+-site:mynet.com+-site:sabah.com.tr+-site:yenisafak.com+-site:cnnturk.com+-site:haberturk.com+-site:sporx.com+-site:iha.com.tr+-site:posta.com.tr+-site:haber7.com+-site:tgrthaber.com.tr+-site:ensonhaber.com+-site:yeniakit.com.tr+-site:aksam.com.tr+-site:haberler.com+-site:aa.com.tr+-site:sozcu.com.tr
```

Bunu da kullanabilirsiniz. Arama sonuçlarında karşılaştıkça o listeye daha fazlasını eklerim, fakat yazıyı güncellemeye kesin üşenirim.

Hadi herkese iyi arama sonuçları.
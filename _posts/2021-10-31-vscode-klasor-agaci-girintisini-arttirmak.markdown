---
layout: post
title: Visual Studio Code'da Klasör Ağacı Girintisini Arttırmak
date: 2021-10-31 09:51:00 +0300
author: Hüseyin Karabaş
description: Visual Studio Code'da kenar çubuğundaki yetersiz ağaç girintilemesini arttırmak 
featured-image: /images/blog/vscode-indent/vscode-indent-cover.png
featured-image-alt: VSCode tree indent
categories: programlama vscode
---

Visual Studio Code'un kenar çubuğunda yer alan dosya gezgininin girintilemesi (indentation) oldukça az görünüyor, öyle değil mi? Bana göre oldukça yetersiz ve ilk bakışta hangi dosya ve dizinin hangi dizinin içinde bulunduğu rahat bir şekilde anlaşılamayabiliyor.

![VSCode varsayılan girintileme](/images/blog/vscode-indent/vscode-indent-1.png)

Bu girintileme seviyesini arttırabilmek için öncelikle <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> kısayolu ile komut paletini açın (Mac için <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>). Ardından klavyenizde tuşlayarak ``Preferences: Open Settings (JSON)`` seçeneğini seçin.

![VSCode command palette](/images/blog/vscode-indent/vscode-indent-2.png)

Global ayarlar için kullanılan JSON dosyası açılacak. Buraya yeni bir değer ekleyeceğiz. Buradaki JSON objesine

```
"workbench.tree.indent": 30
```

gibi bir değer ekleyerek kaydettiğinizde girintilemenin arttığını göreceksiniz.

![settings.json dosyası](/images/blog/vscode-indent/vscode-indent-3.png)

Yazmaya başladığınızda editör kendi de tamamlayacaktır. ``30`` yerine istediğiniz miktarı yazabilirsiniz, varsayılan değeri ``8``'dir. Klasör ağacının yeni görünümü aşağıdaki gibi olacaktır:

![VSCode yeni girintileme](/images/blog/vscode-indent/vscode-indent-4.png)

Bu ayarlamayı JSON dosyasında değil de UI üzerinden de yapabilmeniz mümkün. Komut paletindeyken JSON'ı değil de ``Preferences: Open Settings (UI)`` seçeneğini seçtikten sonra, açılan sayfada üstteki arama kutucuğuna "tree.indent" yazdığınızda ilgili seçeneğin çıktığını göreceksiniz.

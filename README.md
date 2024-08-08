# kisilik-testi
Yapılan araştırmalar Z kuşağının çalıştığı kurumlara bağımlılıklarının çok azaldığını ortaya koyuyor. Bu yüzden şirketlerin İnsan Kaynakları departmanları kuruma bağlımlılığı artırmak için bir şey yeni metodları deniyorlar. Çalıştığın şirketin İK ekibi de bunun için çalışanların karakter yapılarını nasıl analiz edebileceklerini öğrenmek için bir eğitim katıldılar. Bu eğitim sayesinde, iletişimi çalışanların kendi karakter yapılarına göre şekillendirerek kuruma bağlılıklarını artırmak istiyorlar. Senden istedikleri ise her çalışana yaptıracakları kişilik testi sonucunu hesaplayan bir uygulama geliştirmen.

Kişilik testi:

5 sorudan oluşuyor.

Her sorunun da a,b,c gibi 3 şıkkı var.

Her sorunun şıkları ayrı ayrı puana denk geliyor.

Sorulardan alınan toplam puan üzerinden de katılımcının karakteri ortaya çıkıyor.

Adı myCharacter olan bir fonksiyon yazalım.

Bu fonksiyon kullanıcının 5 soruya verdiği cevapları array olarak alsın.

Verdiği cevaplara göre toplam puanı hesaplansın ve o puana denk gelen karakteri string olarak dönsün.

Soruların Puanları: Soru 1: a şıkkı 20, b şıkkı 10, c şıkkı 5 puan Soru 2: a şıkkı 10, b şıkkı 5, c şıkkı 20 puan Soru 3: a şıkkı 5, b şıkkı 20, c şıkkı 10 puan Soru 4: a şıkkı 5, b şıkkı 10, c şıkkı 20 puan Soru 5: a şıkkı 10, b şıkkı 20, c şıkkı 5 puan

Toplam puana göre kişilik:

80-100 arası "Cesur"
50-79 arası "Düşünceli"
0<-49 ise "Sevimli"
Örnek Kullanım: myCharacter(["a", "c", "b", "a", "c"]) "Düşünceli" dönmeli (70 puana denk geliyor) myCharacter(["a", "c", "b", "c", "b"]) "Cesur" dönmeli (100 puana denk geliyor)

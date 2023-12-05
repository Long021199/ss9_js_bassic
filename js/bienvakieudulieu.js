// Bài 1 : Viết chương trình nhập điểm của một sinh viên cho các môn: Vật lý, Hóa học, và Sinh học.
//  Sau đó hiển thị điểm trung bình và tổng của những điểm này.

physics = +prompt("Nhập điểm môn vật lý")
Chemistry = +prompt("Nhập điểm môn hoá học")
Biology = +prompt("Nhập điểm môn sinh học")

console.log("Điểm trung bình của 3 môn: ", (physics + Chemistry + Biology) / 3 );
console.log("Tổng điểm 3 môn: ", physics + Chemistry + Biology );

// Bài 2:Viết chương trình nhập một giá trị là độ 0C (Celsius) và chuyển nó sang độ 0F (Fahrenheit). [Hướng dẫn: C/5 = (F-32)/9].
Celsius = +prompt("Nhập giá trị độ C ")
console.log("Giá trị của Fahrenheit(F) là: ", ((9*Celsius) / 5) + 32);

// Bài 3: Viết chương trình tính diện tích hình tròn.
r = +prompt("Nhập bán kính đường tròn")
console.log("diện tích của hình tròn là: ", r * r * 3.14);

// Bài 4:  Viết chương trình chu vi hình tròn.

d = +prompt("Nhập đường kính hình tròn")
console.log("chu vi hình tròn là: ", d * 3.14);

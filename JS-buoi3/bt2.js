//Bai 2
let arr= [];
//Tao mang random co 5 phan tu la so
for(let i = 0; i< 5; i++)
{
    let a = Math.floor(Math.random()*25);
    arr.push(a);
}
console.log(arr);
let sum_arr=0;
let avg= 0;
//Tinh tong cua mang
for(let i=0; i< arr.length; i++)
{
    sum_arr+= arr[i];   
}
console.log("Tong cua mang arr = " + sum_arr);
//Tinh trung binh cong cua mang
console.log("Trung binh cong cua mang arr = " + sum_arr/ arr.length);
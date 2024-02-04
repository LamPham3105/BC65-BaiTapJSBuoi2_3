function handleExercise(){
    var exercise = document.getElementById("exercises").value;
    
    for (var i = 1; i <= 5; i++) {
        var curExercise = "none";
        if (i == parseInt(exercise))
            curExercise = "block";
        document.getElementById("exercise" + i).style.display = curExercise;
    }
}


/*--------------- Bài tập 1 ---------------*/
/*
Bước 1: Xác định đầu vào
- Nhập vào số ngày làm (biến chứa ngày: day)
- Một hằng số chứa lương 1 ngày: SALARY_ON_ONE_DAY = 100000
- Biến chứa lương: salary
- Biến chứa kết quả: result

Bước 2: Các bước xử lý
- Lấy số ngày nhập trên màn hình va chuyển sang số
- Kiểm tra ngày có đúng format số
- Tính lương: day * SALARY_ON_ONE_DAY

Bước 3: Xuất kết quả ra màn hình
*/

function calculateSalary(){
    const SALARY_ON_ONE_DAY = 100000;
    var day = document.getElementById("day").value;
    day = parseFloat(day);

    var result;
    if (isNaN(day))
        result = "Số ngày đang trống hay không đúng format";
    else if (day < 0)
        result = "Số ngày không thể âm";
    else {
        var salary = (day * SALARY_ON_ONE_DAY);

        salary = salary.toLocaleString('vi', {
            style : 'currency', 
            currency : 'VND'
        });
        
        result = `Lương ${day} ngày làm: ` + salary;
    }
    
    document.getElementById("salary").style.cssText = "background: blue; color: white; padding: 20px; margin-top: 30px";
    document.getElementById("salary").innerHTML = result;
}

/*--------------- Bài tập 2 ---------------*/
/*
Bước 1: Xác định đầu vào
- Nhập vào 5 số (biến chứa 5 số thực)
- Biến chứa tổng số: sum
- Biến chứa số lượng số thỏa số thực: count
- Biến chứa trung bình: avg

Bước 2: Các bước xử lý
- Lấy 5 số nhập trên màn hình và chuyển sang số
- Đếm số lượng số thực và kiểm tra có đúng 5 số không
- Tính trung bình 5 số: avg = sum / count

Bước 3: Xuất kết quả ra màn hình
*/

function calculateAVG(){
    var sum = 0;
    var count = 0;

    var result = "";
    for (var i = 1; i <= 5; i++) {
        var number = document.getElementById("number" + i).value;

        number = parseFloat(number);

        if (isNaN(number))
        {
            result += `Số thứ ${i} đang trống hay không đúng format` + "<br/>";
            continue;
        } 

        sum += parseFloat(number);
        count++;
    }
    
    if (count == 5)
    {
        var avg = sum / count;
        result = "Giá trị trung bình: " + avg;
        if (isNaN(avg))
            result = "Không tính được";
    }        

    document.getElementById("avg").style.cssText = "background: blue; color: white; padding: 20px; margin-top: 30px";
    document.getElementById("avg").innerHTML = result;
}

/*--------------- Bài tập 3 ---------------*/
/*
Bước 1: Xác định đầu vào
- Nhập vào số tiền USD: moneyUSD
- Biến chứa giá tiền USD sang VND hiện tại: CURRENT_USD = 23500
- Biến chứa số tiền VND: moneyVND

Bước 2: Các bước xử lý
- Lấy số nhập trên màn hình và chuyển sang số
- Kiểm trả số nhập vào
- Quy đổi tiền: moneyVND = moneyUSD * CURRENT_USD

Bước 3: Xuất kết quả ra màn hình
*/

function calculateMoney(){
    const CURRENT_USD = 23500;
    var moneyUSD = document.getElementById("money").value;
    moneyUSD = parseFloat(moneyUSD);

    var result;
    if (isNaN(moneyUSD))
        result = "Số tiền đang trống hay không đúng format";
    else if (moneyUSD < 0)
        result = "Số tiền không thể âm"
    else {
        var moneyVND = moneyUSD * CURRENT_USD;

        moneyVND = moneyVND.toLocaleString('vi', {
            style : 'currency', 
            currency : 'VND'
        });
        
        result = "Số tiền quy đổi: " + moneyVND;
    }
    
    document.getElementById("moneyVND").style.cssText = "background: blue; color: white; padding: 20px; margin-top: 30px";
    document.getElementById("moneyVND").innerHTML = result;
}

/*--------------- Bài tập 4 ---------------*/
/*
Bước 1: Xác định đầu vào
- Nhập vào chiều dài: lengthRectangle
- Nhập vào chiều rộng: widthRectangle
- Biến chứa chu vi: perimeter 
- Biến chứa diện tích: acreage
- Biến chứa kết quả: resultPerimeter, resultAcreage

Bước 2: Các bước xử lý
- Lấy chiều dài và chiều rộng nhập trên màn hình và chuyển sang số
- Kiểm tra chiều dài và chiều rộng
- Tính diện tích hình chữ nhật: acreage = lengthRectangle * widthRectangle
- Tính chu vi hình chữ nhật: perimeter = (lengthRectangle + widthRectangle) * 2

Bước 3: Xuất kết quả ra màn hình
*/

function calculateRectangle(){
    var lengthRectangle = document.getElementById("length").value;
    var widthRectangle = document.getElementById("width").value;

    lengthRectangle = parseFloat(lengthRectangle);
    widthRectangle = parseFloat(widthRectangle);

    var resultAcreage = "";
    var resultPerimeter;

    var isCalulate = true;

    if (isNaN(lengthRectangle))
    {
        resultAcreage += "<br>" + "Chiều dài đang trống hay không đúng format";
        isCalulate = false;
    }

    if (lengthRectangle < 0)
    {
        resultAcreage += "<br>" + "Chiều dài không thể số âm";
        isCalulate = false;
    }

    if (isNaN(widthRectangle))
    {
        resultAcreage += "<br>" + "Chiều rộng đang trống hay không đúng format";
        isCalulate = false;
    }

    if (widthRectangle < 0)
    {
        resultAcreage += "<br>" + "Chiều rộng không thể số âm";
        isCalulate = false;
    }

    if (isCalulate)
    {
        acreage = lengthRectangle * widthRectangle;
        perimeter = (lengthRectangle + widthRectangle) * 2;
    
        resultAcreage = "Diện tích hình chữ nhật: " + acreage;
        resultPerimeter = "Chu vi hình chữ nhật: " + perimeter;
    } 

    document.getElementById("acreage").style.cssText = "background: blue; color: white; padding: 20px; margin-top: 30px";

    document.getElementById("acreage").innerHTML = resultAcreage;

    document.getElementById("perimeter").style.cssText = "background: blue; color: white; padding: 20px; margin-top: 30px";
    document.getElementById("perimeter").innerHTML = isCalulate ? resultPerimeter : "";
}

/*--------------- Bài tập 5 ---------------*/
/*
Bước 1: Xác định đầu vào
- Nhập vào số có 2 ký số: digital
- Biến chứa 2 ký số: digitalOne, digitalTwo
- Biến chứa tổng: sum

Bước 2: Các bước xử lý
- Lấy số nhập trên màn hình và chuyển sang số
- Kiểm tra số nhập vào có 2 ký số không
- Xác định hàng đơn vị: digitalOne = digital % 10
- Xác định số hàng chục: digitalTwo = Math.floor(digital / 10)
- Tính tổng 2 ký số: sum = digitalOne + digitalTwo

Bước 3: Xuất kết quả ra màn hình
*/

function calculateSum() {
    var digital = document.getElementById("digital").value;
    var lenghtDigital = digital.length;
    digital = parseInt(digital);

    var result;
    if (isNaN(digital))
        result = "Không tính được tổng 2 số";
    else if (digital < 0)
        result = "Số đang nhập là âm";
    else if (lenghtDigital != 2)
        result = "Số đang nhập khống phải số có 2 ký số";
    else
    {
        var digitalOne = digital % 10;
        var digitalTwo = Math.floor(digital / 10);
        var sum = digitalOne + digitalTwo;
        result = "Tổng 2 ký số: " + sum;
    }

    document.getElementById("digitalTwo").style.cssText = "background: blue; color: white; padding: 20px; margin-top: 30px";
    document.getElementById("digitalTwo").innerHTML = result;
}
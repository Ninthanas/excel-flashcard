const excelCards = [
    { question: "Lấy n ký tự từ phía bên trái của chuỗi", answer: "LEFT - LEFT(text, [num_chars]). <br>Ví dụ: =LEFT('Excel', 2) -> 'Ex'" },
    { question: "Lấy n ký tự từ phía bên phải của chuỗi", answer: "RIGHT - RIGHT(text, [num_chars]). <br>Ví dụ: =RIGHT('Excel', 2) -> 'el'" },
    { question: "Lấy ký tự ở giữa chuỗi từ vị trí bắt đầu", answer: "MID - MID(text, start_num, num_chars). <br>Ví dụ: =MID('Excel', 2, 2) -> 'xc'" },
    { question: "Tìm kiếm giá trị trong cột đầu tiên của bảng", answer: "VLOOKUP - VLOOKUP(lookup_value, table_array, col_index, [range_lookup])" },
    { question: "Tính tổng các ô thỏa mãn một điều kiện", answer: "SUMIF - SUMIF(range, criteria, [sum_range])" },
    { question: "Đếm số ô thỏa mãn một điều kiện", answer: "COUNTIF - COUNTIF(range, criteria)" },
    { question: "Hàm kiểm tra điều kiện (Nếu... thì...)", answer: "IF - IF(logical_test, value_if_true, value_if_false)" },
    { question: "Nối nhiều chuỗi văn bản lại với nhau", answer: "CONCATENATE - CONCATENATE(text1, text2,...). <br>Ví dụ: =CONCAT('A', 'B') -> 'AB'" },
    { question: "Đổi chuỗi văn bản thành chữ HOA", answer: "UPPER - UPPER(text). <br>Ví dụ: =UPPER('excel') -> 'EXCEL'" },
    { question: "Đổi chuỗi văn bản thành chữ thường", answer: "LOWER - LOWER(text). <br>Ví dụ: =LOWER('EXCEL') -> 'excel'" },
    { question: "Viết hoa chữ cái đầu tiên của mỗi từ", answer: "PROPER - PROPER(text). <br>Ví dụ: =PROPER('hello world') -> 'Hello World'" },
    { question: "Loại bỏ khoảng trống thừa trong chuỗi", answer: "TRIM - TRIM(text). <br>Ví dụ: =TRIM('  hi  ') -> 'hi'" },
    { question: "Tìm vị trí của một chuỗi trong chuỗi khác (phân biệt hoa thường)", answer: "FIND - FIND(find_text, within_text, [start_num])" },
    { question: "Tính trung bình cộng các ô theo điều kiện", answer: "AVERAGEIF - AVERAGEIF(range, criteria, [average_range])" },
    { question: "Lấy ngày hiện tại của hệ thống", answer: "TODAY - TODAY(). Không có đối số." },
    { question: "Lấy ngày và giờ hiện tại", answer: "NOW - NOW(). Không có đối số." },
    { question: "Tính giá trị tuyệt đối của một số", answer: "ABS - ABS(number). <br>Ví dụ: =ABS(-5) -> 5" },
    { question: "Làm tròn số đến số chữ số thập phân chỉ định", answer: "ROUND - ROUND(number, num_digits)" },
    { question: "Lấy phần nguyên của một số", answer: "INT - INT(number). <br>Ví dụ: =INT(8.9) -> 8" },
    { question: "Kiểm tra tất cả các điều kiện có đúng không", answer: "AND - AND(logical1, logical2,...)" },
    { question: "Kiểm tra ít nhất một điều kiện có đúng không", answer: "OR - OR(logical1, logical2,...)" },
    { question: "Đếm các ô có chứa số", answer: "COUNT - COUNT(value1, [value2],...)" },
    { question: "Đếm các ô không trống (chứa bất kỳ dữ liệu gì)", answer: "COUNTA - COUNTA(value1, [value2],...)" },
    { question: "Tìm giá trị lớn nhất trong vùng", answer: "MAX - MAX(number1, [number2],...)" },
    { question: "Tìm giá trị nhỏ nhất trong vùng", answer: "MIN - MIN(number1, [number2],...)" },
    { question: "Tính độ dài (số ký tự) của chuỗi", answer: "LEN - LEN(text). <br>Ví dụ: =LEN('App') -> 3" },
    { question: "Trả về một giá trị nếu công thức bị lỗi", answer: "IFERROR - IFERROR(value, value_if_error)" },
    { question: "Tìm kiếm giá trị trong một hàng", answer: "HLOOKUP - HLOOKUP(lookup_value, table_array, row_index, [range_lookup])" },
    { question: "Trả về thứ tự của giá trị trong vùng", answer: "MATCH - MATCH(lookup_value, lookup_array, [match_type])" },
    { question: "Trả về giá trị tại vị trí dòng/cột cụ thể", answer: "INDEX - INDEX(array, row_num, [col_num])" }
];

let currentIndex = 0;
const card = document.getElementById('card-inner');

function updateCard() {
    card.classList.remove('flipped');

    setTimeout(() => {
        const item = excelCards[currentIndex];
        document.getElementById('question-text').textContent = item.question;
        
        const [name, detail] = item.answer.split(' - ');
        document.getElementById('formula-name').textContent = name;
        document.getElementById('formula-detail').innerHTML = item.answer;
        
        document.getElementById('current').textContent = currentIndex + 1;
        document.getElementById('total').textContent = excelCards.length;
        
        const progress = ((currentIndex + 1) / excelCards.length) * 100;
        document.getElementById('progress-bar').style.width = progress + '%';
        document.getElementById('percent').textContent = Math.round(progress) + '%';
    }, 200);
}

document.getElementById('flashcard').addEventListener('click', () => {
    card.classList.toggle('flipped');
});

document.getElementById('next-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % excelCards.length;
    updateCard();
});

document.getElementById('prev-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + excelCards.length) % excelCards.length;
    updateCard();
});

updateCard();
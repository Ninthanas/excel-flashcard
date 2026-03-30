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
    { question: "Tìm kiếm giá trị trong một hàng dọc", answer: "VLOOKUP - VLOOKUP(lookup_value, table_array, col_index_num, range_lookup)"},
    { question: "Trả về thứ tự của giá trị trong vùng", answer: "MATCH - MATCH(lookup_value, lookup_array, [match_type])" },
    { question: "Trả về giá trị tại vị trí dòng/cột cụ thể", answer: "INDEX - INDEX(array, row_num, [col_num])" },
    { question: "Trả về giá trị tuyệt đối của một số", answer: "ABS - ABS(number) <br> Ví dụ: =ABS(-10) -> 10" },
    { question: "Trả về tiền lãi cộng dồn cho chứng khoán trả lãi định kỳ", answer: "ACCRINT - ACCRINT(issue, first_interest, settlement, rate, par, frequency, [basis])" },
    { question: "Trả về tiền lãi cộng dồn cho chứng khoán trả lãi khi đáo hạn", answer: "ACCRINTM - ACCRINTM(issue, settlement, rate, par, [basis])" },
    { question: "Trả về arccosin của một số", answer: "ACOS - ACOS(number)" },
    { question: "Trả về cosin hyperbolic nghịch đảo của một số", answer: "ACOSH - ACOSH(number)" },
    { question: "Trả về một giá trị tổng hợp trong một danh sách hoặc cơ sở dữ liệu", answer: "AGGREGATE - AGGREGATE(function_num, options, ref1, [ref2], ...)" },
    { question: "Trả về tham chiếu dưới dạng văn bản tới một ô đơn trong một trang tính", answer: "ADDRESS - ADDRESS(row_num, column_num, [abs_num], [a1], [sheet_text])" },
    { question: "Trả về khấu hao mỗi kỳ hạn kế toán dùng hệ số khấu hao", answer: "AMORDEGRC - AMORDEGRC(cost, date_purchased, first_period, salvage, period, rate, [basis])" },
    { question: "Trả về khấu hao cho mỗi kỳ hạn kế toán", answer: "AMORLINC - AMORLINC(cost, date_purchased, first_period, salvage, period, rate, [basis])" },
    { question: "Trả về TRUE nếu tất cả các đối số là TRUE", answer: "AND - AND(logical1, [logical2], ...) <br> Ví dụ: =AND(1<2, 5>3) -> TRUE" },
    { question: "Chuyển đổi một số La Mã thành số Ả Rập (2013)", answer: "ARABIC - ARABIC(text)" },
    { question: "Trả về số vùng trong một tham chiếu", answer: "AREAS - AREAS(reference)" },
    { question: "Trả về mảng giá trị văn bản từ mọi khoảng được chỉ định (2021)", answer: "ARRAYTOTEXT - ARRAYTOTEXT(array, [format])" },
    { question: "Thay đổi ký tự toàn độ rộng sang nửa độ rộng (một byte)", answer: "ASC - ASC(text)" },
    { question: "Trả về arcsin của một số", answer: "ASIN - ASIN(number)" },
    { question: "Trả về sin hyperbolic nghịch đảo của một số", answer: "SINH - ASINH(number)" },
    { question: "Trả về arctangent của một số", answer: "ATAN - ATAN(number)" },
    { question: "Trả về arctang từ các tọa độ x và y", answer: "ATAN2 - ATAN2(x_num, y_num)" },
    { question: "Trả về tang hyperbolic nghịch đảo của một số", answer: "ATANH - ATANH(number)" },
    { question: "Trả về giá trị trung bình độ lệch tuyệt đối của các điểm dữ liệu", answer: "AVEDEV - AVEDEV(number1, [number2], ...)" },
    { question: "Trả về giá trị trung bình cộng của các đối số", answer: "AVERAGE - AVERAGE(number1, [number2], ...)" },
    { question: "Trả về giá trị trung bình cộng (bao gồm văn bản và lô-gic)", answer: "AVERAGEA - VERAGEA(value1, [value2], ...)" },
    { question: "Trả về trung bình cộng của các ô đáp ứng một tiêu chí", answer: "AVERAGEIF - AVERAGEIF(range, criteria, [average_range])" },
    { question: "Trả về trung bình cộng của các ô thỏa mãn nhiều tiêu chí", answer: "AVERAGEIFS - AVERAGEIFS(average_range, criteria_range1, criteria1, ...)" },
    { question: "Chuyển đổi một số thành văn bản bằng định dạng tiền tệ Baht", answer: "BAHTTEXT - BAHTTEXT(number)" },
    { question: "Chuyển đổi một số thành bản trình bày văn bản với cơ số đã cho", answer: "BASE - BASE(number, radix, [min_length])" },
    { question: "Trả về hàm Bessel được sửa đổi In(x)", answer: "BESSELI - BESSELI(x, n)" },
    { question: "Trả về hàm Bessel Jn(x)", answer: "BESSELJ - BESSELJ(x, n)" },
    { question: "Trả về hàm Bessel được sửa đổi Kn(x)", answer: "BESSELK - BESSELK(x, n)" },
    { question: "Trả về hàm Bessel Yn(x)", answer: "BESSELY - BESSELY(x, n)" },
    { question: "Trả về hàm phân bố lũy tích beta", answer: "BETA.DIST - BETA.DIST(x, alpha, beta, cumulative, [A], [B])" },
    { question: "Trả về giá trị đảo của hàm phân bố lũy tích beta", answer: "BETA.INV - BETA.INV(probability, alpha, beta, [A], [B])" },
    { question: "Chuyển đổi số nhị phân sang thập phân", answer: "BIN2DEC - BIN2DEC(number) <br> Ví dụ: =BIN2DEC(1010) -> 10" },
    { question: "Chuyển đổi số nhị phân sang thập lục phân", answer: "BIN2HEX - BIN2HEX(number, [places])" },
    { question: "Chuyển đổi số nhị phân sang bát phân", answer: "BIN2OCT - BIN2OCT(number, [places])" },
    { question: "Trả về xác suất phân bố nhị thức", answer: "BINOM.DIST - BINOM.DIST(number_s, trials, probability_s, cumulative)" },
    { question: "Trả về giá trị nhỏ nhất có phân bố nhị thức lũy tích đạt chuẩn", answer: "BINOM.INV - BINOM.INV(trials, probability_s, alpha)" },
    { question: "Áp dụng LAMBDA cho mỗi cột và trả về mảng kết quả (2024)", answer: "BYCOL - BYCOL(array, lambda)" },
    { question: "Áp dụng LAMBDA cho mỗi hàng và trả về mảng kết quả (2024)", answer: "BYROW - BYROW(array, lambda)" },
    { question: "Gọi một thủ tục trong thư viện liên kết động (DLL)", answer: "CALL - CALL(register_id, [argument1], ...)" },
    { question: "Làm tròn số lên đến số nguyên hoặc bội số gần nhất", answer: "CEILING.MATH - CEILING.MATH(number, [significance], [mode])" },
    { question: "Làm tròn số lên đến số nguyên gần nhất (không kể dấu)", answer: "CEILING.PRECISE - CEILING.PRECISE(number, [significance])" },
    { question: "Trả về thông tin về định dạng, vị trí hoặc nội dung của ô", answer: "CELL - CELL(info_type, [reference])" },
    { question: "Trả về ký tự được xác định bởi số mã", answer: "CHAR - CHAR(number) <br> Ví dụ: =CHAR(65) -> 'A'" },
    { question: "Chọn một giá trị từ một danh sách các giá trị", answer: "CHOOSE - CHOOSE(index_num, value1, [value2], ...)" },
    { question: "Trả về các cột được chỉ định từ một mảng (2024)", answer: "CHOOSECOLS - CHOOSECOLS(array, col_num1, [col_num2], ...)" },
    { question: "Trả về các hàng được chỉ định từ một mảng (2024)", answer: "CHOOSEROWS - CHOOSEROWS(array, row_num1, [row_num2], ...)" },
    {question:  "Loại bỏ tất cả ký tự không thể in khỏi văn bản", answer: "CLEAN - CLEAN(text)"},
    { question: "Trả về mã số của ký tự đầu tiên trong chuỗi", answer: "CODE - CODE(text)" },
    { question: "Trả về số cột của một tham chiếu", answer: "COLUMN - COLUMN([reference])" },
    { question: "Trả về số lượng cột trong một tham chiếu", answer: "COLUMNS - COLUMNS(array)" },
    { question: "Trả về số lượng các kết hợp cho số đối tượng cho trước", answer: "COMBIN - COMBIN(number, number_chosen)" },
    { question: "Trả về số kết hợp có lặp lại cho số mục đã cho (2013)", answer: "COMBINA - COMBINA(number, number_chosen)" },
    { question: "Chuyển đổi thực và ảo thành số phức", answer: "COMPLEX - COMPLEX(real_num, i_num, [suffix])" },
    { question: "Kết hợp văn bản từ nhiều dải ô/chuỗi (không dấu tách) (2019)", answer: "CONCAT - CONCAT(text1, [text2], ...)" },
    { question: "Nối một số mục văn bản vào một mục văn bản duy nhất", answer: "CONCATENATE - CONCATENATE(text1, [text2], ...)" },
    { question: "Trả về khoảng tin cậy của trung bình tổng thể", answer: "CONFIDENCE.NORM - CONFIDENCE.NORM(alpha, standard_dev, size)" },
    { question: "Chuyển đổi số từ hệ đo lường này sang hệ đo lường khác", answer: "CONVERT - CONVERT(number, from_unit, to_unit)" },
    { question: "Trả về cosin của một số", answer: "COS - COS(number)" },
    { question: "Trả về cosin hyperbolic của một số", answer: "COSH - COSH(number)" },
    { question: "Trả về cotang của một số (2013)", answer: "COT - COT(number)" },
    { question: "Trả về cotang hyperbolic của một số (2013)", answer: "COTH - COTH(number)" },
    { question: "Đếm có bao nhiêu số nằm trong danh sách các đối số", answer: "COUNT - COUNT(value1, [value2], ...)" },
    { question: "Đếm có bao nhiêu giá trị (không trống) trong danh sách", answer: "COUNTA - COUNTA(value1, [value2], ...)" },
    { question: "Đếm số lượng ô trống trong phạm vi", answer: "COUNTBLANK - COUNTBLANK(range)" },
    { question: "Đếm số ô đáp ứng một tiêu chí cụ thể", answer: "COUNTIF - COUNTIF(range, criteria)" },
    { question: "Đếm số ô đáp ứng nhiều tiêu chí", answer: "COUNTIFS - COUNTIFS(criteria_range1, criteria1, ...)" },
    { question: "Trả về hiệp phương sai (trung bình tích cặp lệch)", answer: "COVARIANCE.P - COVARIANCE.P(array1, array2)" },
    { question: "Trả về số tuần tự của một ngày cụ thể", answer: "DATE - DATE(year, month, day)" },
    { question: "Tính số ngày, tháng hoặc năm giữa hai ngày", answer: "DATEDIF - DATEDIF(start_date, end_date, unit)" },
    { question: "Chuyển số tuần tự thành ngày của tháng (1-31)", answer: "DAY - DAY(serial_number)" },
    { question: "Trả về số ngày giữa hai ngày", answer: "DAYS - DAYS(end_date, start_date)" },
    { question: "Tính tiền lãi trả trong kỳ hạn xác định của khoản đầu tư", answer: "ISPMT - ISPMT(rate, per, nper, pv)" },
    { question: "Thay đổi các ký tự nửa độ rộng thành ký tự độ rộng đầy đủ", answer: "JIS - JIS(text)" },
    { question: "Trả về độ lồi của tập dữ liệu", answer: "KURT - KURT(number1, [number2], ...)" },
    { question: "Trả về giá trị lớn nhất thứ k trong tập dữ liệu", answer: "LARGE - LARGE(array, k)" },
    { question: "Trả về bội số chung nhỏ nhất", answer: "LCM - LCM(number1, [number2], ...)" },
    { question: "Chuyển đổi số tuần tự thành một phút", answer: "MINUTE - MINUTE(serial_number)" },
    { question: "Trả về giá trị thường xuyên xảy ra nhất trong tập dữ liệu", answer: "MODE.SNGL - MODE.SNGL(number1, [number2], ...)" },
    { question: "Chuyển đổi số tuần tự thành một tháng", answer: "MONTH - MONTH(serial_number)" },
    { question: "Làm tròn số đến một bội số mong muốn", answer: "MROUND - MROUND(number, multiple)" },
    { question: "Trả về giá trị lỗi #N/A", answer: "NA - NA()" },
    { question: "Trả về số ngày làm việc toàn thời gian giữa hai ngày", answer: "NETWORKDAYS - NETWORKDAYS(start_date, end_date, [holidays])" },
    { question: "Đảo ngược lô-gic của đối số của nó", answer: "NOT - NOT(logical) <br> Ví dụ: =NOT(TRUE) -> FALSE" },
    { question: "Trả về số tuần tự của ngày và thời gian hiện tại", answer: "NOW - NOW()" },
    { question: "Trả về TRUE nếu bất kỳ đối số nào là TRUE", answer: "OR - OR(logical1, [logical2], ...) <br> Ví dụ: =OR(1>2, 2<3) -> TRUE" },
    { question: "Tính tổng các giá trị tập con chia cho tất cả giá trị (M365)", answer: "PERCENTOF - PERCENTOF(data_subset, all_data)" },
    { question: "Trả về thanh toán định kỳ cho một niên kim", answer: "PMT - PMT(rate, nper, pv, [fv], [type])" },
    { question: "Trả về kết quả của một số lũy thừa", answer: "POWER - POWER(number, power) <br> Ví dụ: =POWER(2, 3) -> 8" },
    { question: "Trả về số ngẫu nhiên giữa 0 và 1", answer: "RAND - RAND()" },
    { question: "Trả về số ngẫu nhiên giữa các số xác định", answer: "RANDBETWEEN - RANDBETWEEN(bottom, top)" },
    { question: "Trả về thứ hạng của số trong danh sách số", answer: "RANK.EQ - RANK.EQ(number, ref, [order])" },
    { question: "Lặp lại văn bản với số lần đã cho", answer: "REPT - REPT(text, number_times)" },
    { question: "Làm tròn một số thành số chữ số xác định", answer: "ROUND - ROUND(number, num_digits)" },
    { question: "Làm tròn số xuống, tiến tới không", answer: "ROUNDDOWN - ROUNDDOWN(number, num_digits)" },
    { question: "Làm tròn số lên, xa khỏi không", answer: "ROUNDUP - ROUNDUP(number, num_digits)" },
    { question: "Trả về số hàng của một tham chiếu", answer: "ROW - ROW([reference])" },
    { question: "Trả về số hàng trong một tham chiếu", answer: "ROWS - ROWS(array)" },
    { question: "Tìm giá trị văn bản (không phân biệt hoa thường)", answer: "SEARCH - SEARCH(find_text, within_text, [start_num])" },
    { question: "Tạo danh sách các số liên tiếp (2021)", answer: "SEQUENCE - SEQUENCE(rows, [columns], [start], [step])" },
    { question: "Trả về dấu hiệu của một số (1 nếu dương, -1 nếu âm)", answer: "SIGN - SIGN(number)" },
    { question: "Sắp xếp nội dung trong một khoảng hoặc mảng", answer: "SORT - SORT(array, [sort_index], [sort_order], [by_col])" },
    { question: "Trả về căn bậc hai dương", answer: "SQRT - SQRT(number)" },
    { question: "Thay văn bản mới cho văn bản cũ trong chuỗi", answer: "SUBSTITUTE - SUBSTITUTE(text, old_text, new_text, [instance_num])" },
    { question: "Định dạng số và chuyển thành văn bản", answer: "TEXT - TEXT(value, format_text)" },
    { question: "Trả về văn bản xuất hiện sau ký tự đã cho (2024)", answer: "TEXTAFTER - TEXTAFTER(text, delimiter, [instance_num], ...)" },
    { question: "Tách chuỗi văn bản bằng dấu tách (2024)", answer: "TEXTSPLIT - TEXTSPLIT(text, col_delimiter, [row_delimiter], ...)" },
    { question: "Trả về mảng trong một cột (2024)", answer: "TOCOL - TOCOL(array, [ignore], [scan_by_column])" },
    { question: "Trả về ngày hiện tại", answer: "TODAY - TODAY()" },
    { question: "Loại bỏ các khoảng trắng thừa khỏi văn bản", answer: "TRIM - TRIM(text)" },
    { question: "Trả về giá trị lô-gic TRUE", answer: "TRUE - TRUE()" },
    { question: "Tra cứu trong cột thứ nhất và trả về giá trị cùng hàng", answer: "VLOOKUP - VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])" },
    { question: "Tìm kiếm khoảng/mảng và trả về mục tương ứng (2021)", answer: "XLOOKUP - XLOOKUP(lookup_value, lookup_array, return_array, ...)" },
    { question: "Trả về năm của một ngày cụ thể", answer: "YEAR - YEAR(serial_number)" }
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

updateCard(document.getElementById('formula-detail').innerHTML = item.answer);
const datas = {
    'Đánh giá môi trường bên trong nhằm xác định': 'Điểm mạnh, điểm yếu',
    'Mô hình quản trị chiến lược tổng quát được chia ra làm mấy giai đoạn:': '5',
    'Phân tích môi trường chiến lược thuộc bước thứ mấy trong quy trình hoạch định chiến lược': '2 và 3',
    'Unilever chia doanh nghiệp thành 4 SBU gồm: SBU1-Clear, SBU2- Omo, SBU3-Sunsilk, SBU4-Surf. Đây là cách phân loại đơn vị kinh doanh chiến lược theo tiêu thức?': 'Sản phẩm có sự khác biệt về công dụng',
    'Thực thi chiến lược để': 'Tất cả đáp án đều đúng'
}

// Hàm này sẽ được thực thi khi extension được kích hoạt
function autoClickRadioButton() {
    const questions = document.querySelectorAll('.que');

    questions.forEach(question => {
        console.log('----------------------------------------')
        const qtext = question.querySelector('.qtext').textContent;
        const answers = question.querySelectorAll('.answer >div');
        const iAnswer = datas[qtext]
        console.log('xxxx:', iAnswer)
        answers.forEach((div, index) => {
            const answer = div.querySelector('.answernumber + div');
            if (iAnswer == answer.textContent) {
                console.log('zzzzz: ', answer.textContent)
                div.querySelector('input[type="radio"]').click();
            }
            if (index === answers.length - 1) {
                setTimeout(() => {
                    // document.querySelector('#mod_quiz-next-nav').click();
                }, 5000);
            }
        });
    });
}

// Gọi hàm tự động click khi trang được tải
autoClickRadioButton();

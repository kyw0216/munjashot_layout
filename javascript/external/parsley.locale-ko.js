// Validation errors messages for Parsley
// Load this after Parsley

Parsley.addMessages( "ko",
{
    defaultMessage: "입력하신 내용이 올바르지 않습니다.",
    type:
    {
        email: "입력하신 이메일이 유효하지 않습니다.",
        url: "입력하신 URL이 유효하지 않습니다.",
        number: "입력하신 전화번호가 올바르지 않습니다.",
        integer: "입력하신 정수가 유효하지 않습니다.",
        digits: "숫자를 입력하여 주십시오.",
        alphanum: "입력하신 내용은 알파벳과 숫자의 조합이어야 합니다.",
        phone: "잘못된 전화번호 규칙입니다."
    },
    notblank: "공백은 입력하실 수 없습니다.",
    required: "필수 입력사항입니다.",
    pattern: "입력하신 내용이 올바르지 않습니다.",
    min: "입력하신 내용이 %s보다 크거나 같아야 합니다.",
    max: "입력하신 내용이 %s보다 작거나 같아야 합니다.",
    range: "입력하신 내용이 %s보다 크고 %s 보다 작아야 합니다.",
    minlength: "입력하신 내용이 너무 짧습니다, %s자 이상을 입력해주세요.",
    maxlength: "입력하신 내용이 너무 깁니다, %s자 이하로 입력해주세요.",
    length: "입력하신 내용은 %s자보다 크고 %s자보다 작아야 합니다.",
    mincheck: "최소한 %s개를 선택하여 주십시오. ",
    maxcheck: "%s개 또는 그보다 적게 선택하여 주십시오.",
    check: "선택하신 내용이 %s보다 크거나 %s보다 작아야 합니다.",
    equalto: "같은 값을 입력하여 주십시오."
} );

Parsley.setLocale( "ko" );
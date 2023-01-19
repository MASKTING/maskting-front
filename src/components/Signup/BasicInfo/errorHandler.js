const phoneState = ['전화번호를 입력해주세요', '올바른 형식이 아닙니다.'];
const nameState = ['이름을 입력해주세요', '올바른 형식이 아닙니다.'];
const birthState = ['생년월일을 입력해주세요', '올바른 형식이 아닙니다.'];

const phoneCheck = phone => {
	const phoneReg = /\d{11}/;

	if (phone.length === 0) return phoneState[0];

	if (!phoneReg.test(phone) || phone.length !== 11) return phoneState[1];

	return 0;
};

const birthCheck = birth => {
	const birthReg = /\d{8}/;

	if (birth.length === 0) return birthState[0];

	if (!birthReg.test(birth) || birth.length !== 8) return birthState[1];

	return 0;
};

const nameCheck = name => {
	const nameReg = /[가-힣]/;

	console.log(nameReg.test('가힣asdfa'));

	if (name.length === 0) return nameState[0];

	if (!nameReg.test(name) || name.length < 2) return nameState[1];

	return 0;
};

const mainErrorHandler = (type, value) => {
	if (type === 'name') return nameCheck(value);

	if (type === 'birth') return birthCheck(value);

	if (type === 'phone') return phoneCheck(value);

	return 0;
};

export { phoneCheck, birthCheck, nameCheck, mainErrorHandler };

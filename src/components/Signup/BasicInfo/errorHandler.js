const phoneState = ['전화번호를 입력해주세요', '올바른 형식이 아닙니다.'];
const nameState = ['이름을 입력해주세요', '올바른 형식이 아닙니다.'];
const birthState = ['생년월일을 입력해주세요', '올바른 형식이 아닙니다.'];
const genderState = ['성별을 선택해주세요'];
const jobState = ['직업을 선택해주세요'];

const phoneCheck = phone => {
	const phoneReg = /^(010)\d{4}\d{4}$/;

	if (phone === undefined || phone.length === 0) return phoneState[0];

	if (!phoneReg.test(phone) || phone.length !== 11) return phoneState[1];

	return 0;
};

const birthCheck = birth => {
	const birthReg = /\d{8}/;

	if (birth === undefined || birth.length === 0) return birthState[0];

	if (!birthReg.test(birth) || birth.length !== 8) return birthState[1];

	return 0;
};

const nameCheck = name => {
	const nameReg = /^[가-힣]{2,6}$/;

	if (name === undefined || name.length === 0) return nameState[0];

	if (!nameReg.test(name) || name.length < 2) return nameState[1];

	return 0;
};

const genderCheck = gender => {
	if (gender === undefined) return genderState[0];

	return 0;
};

const jobCheck = job => {
	if (job === undefined) return jobState[0];

	return 0;
};

const mainErrorHandler = (type, value) => {
	if (type === 'name') return nameCheck(value);

	if (type === 'birth') return birthCheck(value);

	if (type === 'phone') return phoneCheck(value);

	if (type === 'occupation') return jobCheck(value);

	if (type === 'gender') return genderCheck(value);

	return 0;
};

const isEmpty = stateList => {
	let emptyCheck = false;
	for (let key in stateList) if (stateList[key] === '') return true;
	return emptyCheck;
};

const validCheck = errorState => {
	let validity = true;
	for (const key in errorState) if (errorState[key]) validity = false;
	return validity;
};

export { mainErrorHandler, isEmpty, validCheck };

const clubForm = document.querySelector("#club-form");
const studentNameInput = document.querySelector("#student-name");
const studentIdInput = document.querySelector("#student-id");
const studentEmailInput = document.querySelector("#student-email");
const clubNameInput = document.querySelector("#club-name");
const partSelect = document.querySelector("#part");
const reasonInput = document.querySelector("#reason");

function createAlertMessage() {
  // TODO:
  // 각 입력창의 .value를 읽어서 변수에 저장해보세요.
  const studentName = studentNameInput.value;
  const studentId = studentIdInput.value;
  const studentEmail = studentEmailInput.value;
  const clubName = clubNameInput.value;
  const part = partSelect.value;
  const reason = reasonInput.value;
  return `지원서가 제출되었습니다.

이름: ${studentName}
학번: ${studentId}
이메일: ${studentEmail}
관심 동아리: ${clubName}
지원 분야: ${part}
지원 이유: ${reason}

합격을 기원합니다.
저희 동아리에 지원해주셔서 감사합니다.`;
}

clubForm.addEventListener("submit", function (event) {
  // TODO:
  // 새로고침이 되지 않도록 막아보세요.
  event.preventDefault();
  const message = createAlertMessage();

  // TODO:
  // message를 alert로 띄워보세요.
  alert(message);
});

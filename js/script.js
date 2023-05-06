const onClickButton = () => {
  const popMessage = document.getElementById("popMessage");
  popMessage.classList.add("pop-message-remove");
};

document.getElementById("btnOpen").addEventListener("click", onClickButton);

const getValueMessage = document.getElementById("messageWa")

document.getElementById("btnWa").addEventListener("click", () => {
  const urlWa = "https://api.whatsapp.com/send?phone=6285709005738&text="
  window.location.href = urlWa + getValueMessage.value
})



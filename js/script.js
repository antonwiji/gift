const onClickButton = () => {
  const popMessage = document.getElementById("popMessage");
  popMessage.classList.add("pop-message-remove");
};

document.getElementById("btnOpen").addEventListener("click", onClickButton);

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    const isOpen = answer.style.maxHeight;

    // Close all answers
    document.querySelectorAll(".faq-answer").forEach(a => {
      a.style.maxHeight = null;
      a.style.paddingTop = "0";
      a.style.paddingBottom = "0";
    });

    // Toggle current
    if (!isOpen) {
      answer.style.maxHeight = answer.scrollHeight + "px";
      answer.style.paddingTop = "0.5rem";
      answer.style.paddingBottom = "0.5rem";
    }
  });
});

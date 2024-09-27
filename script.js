<script>
  document.addEventListener("DOMContentLoaded", () => {
    const skillFills = document.querySelectorAll('.skill-fill');

    skillFills.forEach(skillFill => {
      const skillValue = skillFill.getAttribute('data-skill');
      skillFill.style.width = skillValue + '%'; // Set width to skill value
    });
  });
</script>

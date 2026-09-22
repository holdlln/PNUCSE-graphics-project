// 실제 설명/링크를 받으면 각 프로젝트 데이터를 업데이트합니다.
const projects = {
  move: { title: '모브', event: '언톡캠프', description: '언톡캠프에서 진행한 모브 프로젝트입니다. 서비스의 목적과 주요 기능을 소개할 예정입니다.' },
  bookus: { title: '북어스', event: '언톡캠프', description: '언톡캠프에서 진행한 북어스 프로젝트입니다. 기획 배경과 주요 기능을 소개할 예정입니다.' },
  life: { title: 'Life is Computer', event: '테크위크 해커톤', description: '테크위크 해커톤에서 진행한 프로젝트입니다. 해결하려던 문제와 결과를 소개할 예정입니다.' }
};
const dialog = document.querySelector('#project-dialog');
let trigger;
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const project = projects[button.dataset.project];
    if (!project) return;
    trigger = button;
    document.querySelector('#dialog-title').textContent = project.title;
    document.querySelector('#dialog-event').textContent = project.event;
    document.querySelector('#dialog-description').textContent = project.description;
    document.querySelector('#dialog-cover').replaceChildren(button.querySelector('.work-cover').cloneNode(true));
    dialog.showModal();
    document.body.classList.add('modal-open');
    dialog.scrollTop = 0;
  });
});
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const box = dialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  trigger?.focus({preventScroll:true});
});

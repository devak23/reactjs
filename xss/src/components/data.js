// Let's suppose this response is coming from a service and have
// some XSS attacks in the content...
const response = [
  {
    id: 1,
    title: 'Post 1...',
    content: '<p>This is <strong>HTML</strong> code</p>'
  },
  {
    id: 2,
    title: 'Post 2...',
    content: `<p>Alert: <script>alert(1);</script></p>`
  },
  {
    id: 3,
    title: 'Post 3...',
    content: `
        <p>
        <img onmouseover="alert('This site is not secure');"
        src="attack.jpg" />
        </p>`
  }
];

export default response;

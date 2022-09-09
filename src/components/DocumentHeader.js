import StyledSection from '../styles/DocumentHeaderStyles';

function DocumentHeader() {
  return (
    <StyledSection>
      <i class='fa fa-file-o'></i>
      <div>
        <p>Document Name</p>
        <p>welcome.md</p>
      </div>
    </StyledSection>
  );
}

export default DocumentHeader;

import HamburgerButton from './HamburgerButton';
import DocumentHeader from './DocumentHeader';
import StyledHeader from '../styles/HeaderStyles';

function Header() {
  return (
    <StyledHeader>
      <section className='left-section'>
        <HamburgerButton />
        <h4>Markdown</h4>
        <div className='seperator' />
        <DocumentHeader />
      </section>
      <section className='right-section'>
        <i class='fa fa-trash-o'></i>
        <button>
          <i class='fa fa-save'></i>
          Save Changes
        </button>
      </section>
    </StyledHeader>
  );
}

export default Header;

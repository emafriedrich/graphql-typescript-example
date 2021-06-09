import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '../../../api/queries';

function Headlines() {
  const { data } = useQuery(GET_CATEGORIES);
  let categories = [];
  if (data) {
    categories = data.categories;
  }
  return (
    <div>
      <nav id="primary-menu" className="with-arrows clearfix">
        <ul className="one-page-menu">
          <li><a href="about"><div>Quiénes somos</div></a></li>
          <li><a href="faqs"><div>Preguntas</div></a></li>
          <li><a href="#"><div>Promesas</div></a>
            <ul>
              { categories.map((category: any) => (
                  <li key={category.id}>
                    <div style={{ display: 'flex' }}>
                      <i className="icon-line2-eye"></i>
                      <a style={{ marginLeft: '15px' }} href="category"><div>{category.name}</div></a>
                    </div>
                  </li>
                ))
              }
            </ul>
          </li>
          <li><a href="#" data-toggle="modal" data-target="#agregar"><div>Agregar Promesa</div></a></li>
          <li><a href="#" data-toggle="modal" data-target="#donar"><div>Donar</div></a></li>
          <li><a href="https://iglered.org" target="_blank" rel="noreferrer"><div>Iglesias Sanas</div></a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Headlines;



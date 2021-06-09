import { useQuery } from '@apollo/client';
import { MAIN_CATEGORIES } from '../../../../api/queries';

function MainCategories() {
	const { data } = useQuery(MAIN_CATEGORIES);
	let categories = [];
	if (data) {
		categories = data.mainCategories;
	} else {
		return null;
	}
  return (
    <div className="content-wrap notoppadding nobottompadding clearfix">

				<div className="container topmargin-lg bottommargin-lg clearfix">

					<div className="divcenter" style={{ maxWidth: '960px' }}>
						<div className="tabs tabs-alt tabs-responsive tabs-justify clearfix" id="tab">

							<ul className="tab-nav clearfix">
								{ categories.map((category: any) => (
										<li key={category.id}><a href={"#tabs-" + category.id}><i className="icon-line2-eye"></i>{ category.name }</a></li>
									))}
							</ul>

							<div className="tab-container">
								{ categories.map((category: any) => (
									<div className="tab-content clearfix center" id={"tabs-" + category.id} key={category.id}>
										<div className="story-box description-left clearfix">
											<div className="story-box-info">
												<div className="story-box-content">
													<h4 className="text-purple">« Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna. »</h4>
												</div>
												<h5 className="grey-text"><i>- Juan 3:16</i></h5>
											</div>
										</div>
										<a href="categoria.html" className="button button-circle button-border button-border-thin button-amber mt-5"><i className="icon-line-arrow-right"></i> Ver más de la categoría</a>
									</div>
								))}
							</div>
						</div>
					</div>

				</div>

			</div>
  );
}

export default MainCategories;
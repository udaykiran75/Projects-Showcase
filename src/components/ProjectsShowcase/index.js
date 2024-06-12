import {Component} from 'react'
import Loader from 'react-loader-spinner'

import {
  Appbgcontainer,
  Header,
  LogoImage,
  Select,
  ProjectsMainContainer,
  LoadingContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureText,
  RetryButton,
  ProjectsCardsList,
  ProjectCard,
  ProjectName,
  ProjectImage,
} from './styledComponents'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

const apiStatusConstents = {
  initial: 'INITIAL',
  inprogress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class ProjectsShowcase extends Component {
  state = {
    categoryId: categoriesList[0].id,
    apiStatus: apiStatusConstents.initial,
    projectsList: [],
  }

  componentDidMount() {
    this.getCategoryProjects()
  }

  getCategoryProjects = async () => {
    this.setState({apiStatus: apiStatusConstents.inprogress})
    const {categoryId} = this.state
    const url = `https://apis.ccbp.in/ps/projects?category=${categoryId}`
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const formatedData = data.projects.map(category => ({
        id: category.id,
        name: category.name,
        imageUrl: category.image_url,
      }))
      this.setState({
        projectsList: formatedData,
        apiStatus: apiStatusConstents.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstents.failure})
    }
  }

  onChangeCategoryId = event => {
    this.setState({categoryId: event.target.value}, this.getCategoryProjects)
  }

  renderLoadingView = () => (
    <LoadingContainer data-testid="loader">
      <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
    </LoadingContainer>
  )

  renderFailureView = () => (
    <FailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureText>
        We cannot seem to find the page you are looking for.
      </FailureText>
      <RetryButton onClick={this.getCategoryProjects}>Retry</RetryButton>
    </FailureContainer>
  )

  renderProjectsCards = () => {
    const {projectsList} = this.state
    return (
      <ProjectsCardsList>
        {projectsList.map(eachItem => (
          <ProjectCard key={eachItem.id}>
            <ProjectImage alt={eachItem.name} src={eachItem.imageUrl} />
            <ProjectName>{eachItem.name}</ProjectName>
          </ProjectCard>
        ))}
      </ProjectsCardsList>
    )
  }

  renderApiStatusView = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstents.inprogress:
        return this.renderLoadingView()
      case apiStatusConstents.failure:
        return this.renderFailureView()
      case apiStatusConstents.success:
        return this.renderProjectsCards()
      default:
        return null
    }
  }

  render() {
    const {categoryId} = this.state

    return (
      <Appbgcontainer>
        <Header>
          <LogoImage
            src="https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png"
            alt="website logo"
          />
        </Header>
        <ProjectsMainContainer>
          <Select value={categoryId} onChange={this.onChangeCategoryId}>
            {categoriesList.map(category => (
              <option key={category.id} value={category.id}>
                {category.displayText}
              </option>
            ))}
          </Select>
          {this.renderApiStatusView()}
        </ProjectsMainContainer>
      </Appbgcontainer>
    )
  }
}
export default ProjectsShowcase

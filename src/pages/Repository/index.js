import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import api from '../../services/api';

import Container from '../../Components/Container';
import { Loading, Owner, IssueList, Filters, Pagination } from './styles';

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    repository: {},
    issues: [],
    loading: true,
    gitFilters: [
      { id: 0, state: 'all', label: 'Todas', active: true },
      { id: 1, state: 'open', label: 'Abertas', active: false },
      { id: 2, state: 'closed', label: 'Fechadas', active: false },
    ],
    filterIndex: 0,
    page: 1,
  };

  async componentDidMount() {
    const { match } = this.props;
    const { gitFilters, page } = this.state;

    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: gitFilters.state,
          per_page: 5,
          page: page,
        },
      }),
    ]);

    this.setState({
      loading: false,
      repository: repository.data,
      issues: issues.data,
    });
  }

  changeIssues = async () => {
    const { match } = this.props;
    const { gitFilters, filterIndex, page } = this.state;

    const repoName = decodeURIComponent(match.params.repository);

    const response = await api.get(`/repos/${repoName}/issues`, {
      params: {
        state: gitFilters[filterIndex].state,
        per_page: 5,
        page: page,
      },
    });

    this.setState({
      issues: response.data,
    });
  };

  handleFilterClick = async e => {
    const valuePressed = Number(e.target.value);

    await this.setState({
      filterIndex: valuePressed,
    });

    this.changeIssues();
  };

  handlePageClick = async e => {
    const nextPage = Number(e.target.value);

    await this.setState({ page: nextPage });

    this.changeIssues();
  };

  render() {
    const { repository, issues, loading, gitFilters, page } = this.state;

    if (loading) {
      return <Loading>Carregando...</Loading>;
    }

    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos repositórios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>

        <IssueList>
          <Filters>
            {gitFilters.map(filter => (
              <button
                key={filter.id}
                value={filter.id}
                onClick={this.handleFilterClick}
              >
                {filter.label}
              </button>
            ))}
          </Filters>
          {issues.map(issue => (
            <li key={String(issue.id)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url} target="_blank">
                    {issue.title}
                  </a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>
        <Pagination>
          {page === 1 ? (
            ''
          ) : (
            <button value={page - 1} onClick={this.handlePageClick}>
              Anterior
            </button>
          )}
          <span>Página: {page}</span>
          <button value={page + 1} onClick={this.handlePageClick}>
            Próxima
          </button>
        </Pagination>
      </Container>
    );
  }
}

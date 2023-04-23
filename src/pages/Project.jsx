import {parse, v4 as uuidv4} from 'uuid';
import styles from './Project.module.css'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Loading} from "../components/layouts/Loading.jsx";
import {Container} from "../components/layouts/Container.jsx";
import {ProjectForm} from "../components/project/ProjectForm.jsx";
import {Messagem} from "../components/layouts/Messagem.jsx";
import {ServiceForm} from "../components/service/ServiceForm.jsx";
import {ServiceCard} from "../components/service/ServiceCard.jsx";

export const Project = () => {
    const {id} = useParams();
    const [project, setProject] = useState({});
    const [service, setService] = useState({});
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [message, setMessage] = useState('');
    const [typeMessage, setTypeMessage] = useState('');
    const [showSerivceForm, setShowSerivceForm] = useState(false);

    const createService = async (project) => {
        setMessage('');
        const lastService = project.services[project.services.length - 1];

        lastService.id = uuidv4();

        const lastServiceCost = lastService.cost
        const newCost = project.cost + parseFloat(lastServiceCost)

        if (newCost > parseFloat(project.budget)) {

            console.log('O custo do projeto não pode ser maior que o orçamento')
            setMessage('O custo do projeto não pode ser maior que o orçamento');
            setTypeMessage('erro');
            project.services.pop();
            return false
        }

        project.cost = newCost

        await fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project)
        })
            .then((response) => response.json())
            .then(data => {
                setMessage('Serviço adicionado com sucesso');
                setTypeMessage('success');
                setProject(data);
                toggleServiceForm()
            })
            .catch((error) => {
                setMessage('Erro ao adicionar serviço');
                setTypeMessage('erro');
            })


    }
    useEffect(() => {
        const timer = setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    setProject(data);
                    setService(data.services)
                })
                .catch((error) => {
                    setMessage('Erro ao carregar projeto');
                    setTypeMessage('erro');
                    console.error('Error:', error);
                })
        }, 2000)
        return () => {
            clearTimeout(timer);
        }
    }, [id])

    const removeService = async (serviceId) => {

    }
    const toggleProjectForm = () => {
        setShowProjectForm(!showProjectForm)
    }
    const toggleServiceForm = () => {
        setShowSerivceForm(!showSerivceForm)
    }

    const editPost = (projectEdit) => {
        setMessage('');
        if (projectEdit.budget < projectEdit.cost) {
            setTypeMessage('erro');
            setMessage('O orçamento não pode ser menor que o custo do projeto');
            return false
        }

        fetch(`http://localhost:5000/projects/${projectEdit.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(projectEdit)
        })
            .then((response) => response.json())
            .then((data) => {
                setProject(data);
                setService(data.services)
                toggleProjectForm();
                setMessage('Projeto atualizado com sucesso');
                setTypeMessage('success');
            })
            .catch((error) => {
                setMessage('Erro ao atualizar projeto');
                setTypeMessage('erro');
                console.error('Error:', error);
            })
    }
    return (
        <>
            {project.name ? (
                <div className={styles.projectDetails}>
                    <Container customClass="column">
                        {message && <Messagem msg={message} type={typeMessage}/>}
                        <div className={styles.detailsContainer}>
                            <h1>Project: {project.name}</h1>
                            <button className={styles.btn} onClick={toggleProjectForm}>{
                                showProjectForm ? 'Fechar' : 'Editar projeto'
                            }</button>
                            {!showProjectForm ? (
                                <div className={styles.projectInfo}>
                                    <p>
                                        <span>Categoria:</span> {project.category?.name}
                                    </p>

                                    <p>
                                        <span>Total de Orçamento::</span> R${project.budget}
                                    </p>

                                    <p>
                                        <span>Total Ultilizado::</span> {project.cost}
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.projectInfo}>
                                    <ProjectForm
                                        handleSubmit={editPost}
                                        btnText="Atualizar"
                                        projectData={project}
                                    />
                                </div>
                            )}
                        </div>
                        <div className={styles.serviceFormContainer}>
                            <h2>Adicionar Serviço</h2>
                            <button className={styles.btn} onClick={toggleServiceForm}>{
                                showSerivceForm ? 'Fechar' : 'Adicionar serviço'
                            }</button>

                            <div className={styles.projectInfo}>
                                {showSerivceForm && (
                                    <ServiceForm
                                        handleSubmit={createService}
                                        btnText="Adicionar"
                                        projectData={project}
                                    />
                                )}
                            </div>
                        </div>

                        <h2>Serviços</h2>
                        <Container customClass="start">
                            {service.length > 0 && (
                                service.map((service) => (
                                    <ServiceCard
                                        id={service.id}
                                        key={service.id}
                                        name={service.name}
                                        cost={service.cost}
                                        description={service.description}
                                        handleRemove={removeService}
                                    />
                                )))
                            }
                            {service.length === 0 && <p>Não há serviços cadastrados.</p>}
                        </Container>
                    </Container>

                </div>) : <Loading/>
            }
        </>
    );
};

/** @format */

import {
	Project,
	ProjectData,
	Projects,
	ProjectsData,
} from '@/interfaces/project';
import { baseApi } from '@/lib/baseApi';
import { getGenerals } from '@/lib/getGenerals';
import { Title } from '@atoms/Title';
import { GetStaticProps } from 'next';
import { Main } from 'next/document';

interface ProjectProps {
	project: ProjectData;
	projectItems: ProjectsData[];
}

const index = ({ project, projectItems }: ProjectProps) => {
	return (
		<main className='Project'>
			<div className='Project__title'>
				<Title center title={project.title} subtitle={project.subtitle} />
				<p>{project.text}</p>
			</div>

            <section className='Project__containerCard'>
                
            </section>
		</main>
	);
};

export default index;

export const getStaticProps: GetStaticProps = async () => {
	const generals = await getGenerals();

	const [{ data: project }, { data: projectItems }] = await Promise.all([
		baseApi.get<Project>(`/project`),
		baseApi.get<Projects>(`/project-items?populate=deep`),
	]);

	return {
		props: {
			project: project.data,
			projectItems: projectItems.data,
			generals,
		},
		revalidate: 1,
	};
};

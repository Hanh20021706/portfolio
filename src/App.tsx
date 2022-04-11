import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutList from './page/admin/about/AboutList';
import AboutMeForm from './page/admin/about/AboutMeForm';
import ProjectForm from './page/admin/project/ProjectForm';
import ProjectList from './page/admin/project/ProjectList';
import SchoolForm from './page/admin/school/SchoolForm';
import SchoolList from './page/admin/school/SchoolList';
import SkillForm from './page/admin/skills/SkillForm';
import SkillList from './page/admin/skills/SkillList';
import Dashborad from './page/Dashborad';
import HomePage from './page/HomePage';
import LayoutAdmin from './page/layout/LayoutAdmin';
import LayoutClient from './page/layout/LayoutClient';

function App() {
    return (
        <div className="App">
            <Routes>
                {/* client */}
                <Route path={'/'} element={<LayoutClient />}>
                    <Route index element={<HomePage />} />
                </Route>

                {/* admin */}
                <Route path={'admin'} element={<LayoutAdmin />}>
                    <Route index element={<Dashborad />} />
                    <Route path='abouts'>
                        <Route index element={<AboutList />} />
                        <Route path='create' element={<AboutMeForm />} />
                        <Route path='edit/:id' element={<AboutMeForm />} />

                    </Route>
                    <Route path='project'>
                        <Route index element={<ProjectList />} />
                        <Route path='create' element={<ProjectForm />} />
                        <Route path='edit/:id' element={<ProjectForm />} />

                    </Route>
                    <Route path='skills'>
                        <Route index element={<SkillList />} />
                        <Route path='create' element={<SkillForm />} />
                        <Route path='edit/:id' element={<SkillForm />} />

                    </Route>
                    <Route path='schools'>
                        <Route index element={<SchoolList />} />
                        <Route path='create' element={<SchoolForm />} />
                        <Route path='edit/:id' element={<SchoolForm />} />

                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;

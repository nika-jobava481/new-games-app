import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { PlayQuizComponent } from './pages/play-quiz/play-quiz.component';
import { QuizResultComponent } from './pages/quiz-result/quiz-result.component';
import { QuizHighscoresComponent } from './pages/quiz-highscores/quiz-highscores.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: 'quiz', component: QuizComponent },
    { path: 'quiz/play', component: PlayQuizComponent },
    { path: 'quiz/result', component: QuizResultComponent },
    { path: 'quiz/highscores', component: QuizHighscoresComponent },
    { path: "", pathMatch: "full", redirectTo: "home" },
    { path: "**", pathMatch: "full", redirectTo: "home" },
];

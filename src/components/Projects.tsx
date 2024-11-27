import React from 'react'
import Card from './Card'

const Projects = () => {
  return (
    <section id="projects">
        <h1 className="projects__title">Projects</h1>
        <div className="projects__content">
            <Card title="Community Centre Website" description="Dynamic website and admin portal created for use by Langwarrin Community Centre." link=""></Card>
            <Card title="AI Gameplay Agent" description="AI 'perfect play' agent for the fictional game 'Tetress' based on Tetris. Utilises adversarial alpha beta search accompanied by other pruning and optimisation techniques to provide efficient computation." link="https://github.com/josephkeelagher/AI-Tetress-Agent"></Card>
            <Card title="IMDB Rating Predictor" description="Leverages Data Analysis and Pre-Processing tehcniques with powerful Machine Learning algorithms like RandomForest & GradientBoosting to predict IMDB Movie Ratings with +75% accuracy." link="https://github.com/josephkeelagher/IMDB-Predictor-Machine-Learning"></Card>
            <Card title="Unity Action FPS Game 'OPERATION: DEEP'" description='Eerie-Action genre PC Game built in Unity. Play as a secret agent to solve puzzles and shoot monsters!'></Card>
            <Card title="AFL Medal Predictor" description='Leverages machine learning and an AFL player dataset to predict the 2022 AFL Brownlow medal winner.' link="https://github.com/josephkeelagher/AFL-brownlow-predictor"></Card>
            <Card title="Java Rhythm Game 'SHADOWDANCE'" description='Using BAGEL and MAVEN libraries I built a keyboard oriented rhythm game with multiple levels.' link="https://github.com/josephkeelagher/ShadowDance-game"></Card>
        </div>
    </section>
  )
}

export default Projects
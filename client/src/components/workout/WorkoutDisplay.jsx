/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Clock,
  Dumbbell,
  Calendar,
  Activity,
  Zap,
  Info,
} from "lucide-react";

const WorkoutDisplay = ({ workoutData }) => {
  const [activeDay, setActiveDay] = useState(0);
  const [expandedExercise, setExpandedExercise] = useState(null);



  return (
    <div className="w-full">
      {workoutData &&
        <div className="w-10/12 mx-auto p-4 bg-gray-50 min-h-screen my-6 rounded-lg shadow-lg">
          {/* Header Stats */}
          <div className="bg-white rounded-xl shadow-lg mb-6 overflow-hidden">
            <div className="bg-purple-400 px-6 py-4">
              <h1 className="text-2xl font-bold text-gray-900">
                Workout Program
              </h1>
              <p className="text-gray-800 mt-1">
                {workoutData.programOverview.primaryFocus}
              </p>
            </div>

            <div className="bg-purple-200 grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
              <div className="flex items-center space-x-3">
                <Calendar className="w-6 h-6 text-purple-400" />
                <div>
                  <p className=" font-semibold text-gray-600">Sessions/Week</p>
                  <p className="font-bold ">
                    {workoutData.programOverview.sessionsPerWeek}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-purple-400" />
                <div>
                  <p className="font-semibold text-gray-600">Duration</p>
                  <p className="font-bold">
                    {workoutData.programOverview.totalDuration} min
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Activity className="w-6 h-6 text-purple-400" />
                <div>
                  <p className="font-semibold text-gray-600">Intensity</p>
                  <p className="font-bold">
                    {workoutData.programOverview.intensityLevel}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="w-6 h-6 text-purple-400" />
                <div>
                  <p className="font-semibold text-gray-600">Frequency</p>
                  <p className="font-bold">
                    {workoutData.programOverview.weeklyFrequency}x/week
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Workout Days */}
          <div className="space-y-4">
            {workoutData.workoutSessions.map((session, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setActiveDay(activeDay === index ? null : index)
                  }
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-400 p-2 rounded-lg">
                      <Dumbbell className="w-5 h-5 text-gray-900" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">
                        {session.day}
                      </h2>
                      <p className="font-semibold text-gray-600">
                        {session.focus} • {session.duration} min
                      </p>
                    </div>
                  </div>
                  {activeDay === index ? <ChevronUp /> : <ChevronDown />}
                </button>

                {activeDay === index && (
                  <div className="p-6 space-y-6">
                    {/* Warm-up */}
                    <div className="bg-purple-200 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-3 flex items-center">
                        <Clock className="w-5 h-5 mr-2 text-purple-400" />
                        Warm-up ({session.warmup.duration} min)
                      </h3>
                      <div className="grid gap-3">
                        {session.warmup.exercises.map((exercise, idx) => (
                          <div
                            key={idx}
                            className="bg-white rounded-lg p-3 shadow-sm"
                          >
                            <p className="font-medium">{exercise.name}</p>
                            <p className="font-semibold text-gray-600">
                              {exercise.sets} × {exercise.reps}
                            </p>
                            {exercise.notes && (
                              <p className="text-sm text-gray-500 mt-1 italic">
                                {exercise.notes}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Main Workout */}
                    <div className="space-y-4">
                      {session.mainWorkout.map((exercise, idx) => (
                        <div key={idx} className="border rounded-lg">
                          <button
                            onClick={() =>
                              setExpandedExercise(
                                expandedExercise === idx ? null : idx
                              )
                            }
                            className="w-full px-4 py-3 flex items-center justify-between hover:bg-purple-100 transition-colors"
                          >
                            <div>
                              <p className="font-semibold text-left">
                                {exercise.exerciseName}
                              </p>
                              <p className="font-semibold text-gray-600">
                                {exercise.sets} sets × {exercise.reps} | RPE:{" "}
                                {exercise.rpe}
                              </p>
                            </div>
                            {expandedExercise === idx ? (
                              <ChevronUp />
                            ) : (
                              <ChevronDown />
                            )}
                          </button>

                          {expandedExercise === idx && (
                            <div className="p-4 border-t bg-purple-200">
                              <div className="space-y-4">
                                <div className="bg-white p-3 rounded-lg shadow-sm">
                                  <p className="text-sm font-medium mb-2">
                                    Details
                                  </p>
                                  <div className="grid grid-cols-2 gap-2 text-sm">
                                    <div>
                                      <span className="text-gray-600">
                                        Rest:
                                      </span>{" "}
                                      {exercise.rest}
                                    </div>
                                    <div>
                                      <span className="text-gray-600">
                                        Tempo:
                                      </span>{" "}
                                      {exercise.tempoNotes}
                                    </div>
                                  </div>
                                </div>

                                <div className="bg-white p-3 rounded-lg shadow-sm">
                                  <p className="text-sm font-medium mb-2">
                                    Form Cues
                                  </p>
                                  <ul className="space-y-1">
                                    {exercise.formCues.map((cue, cueIdx) => (
                                      <li
                                        key={cueIdx}
                                        className="flex items-start text-sm"
                                      >
                                        <Info className="w-4 h-4 mr-2 mt-0.5 text-purple-400 flex-shrink-0" />
                                        {cue}
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="bg-white p-3 rounded-lg shadow-sm">
                                  <p className="text-sm font-medium mb-2">
                                    Alternative Exercises
                                  </p>
                                  <div className="flex flex-wrap gap-2">
                                    {exercise.alternatives.map(
                                      (alt, altIdx) => (
                                        <span
                                          key={altIdx}
                                          className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm"
                                        >
                                          {alt}
                                        </span>
                                      )
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Cooldown */}
                    <div className="bg-purple-200 rounded-lg p-4">
                      <h3 className="text-lg font-semibold mb-3 flex items-center">
                        <Clock className="w-5 h-5 mr-2 text-purple-400" />
                        Cooldown ({session.cooldown.duration} min)
                      </h3>
                      <div className="grid gap-3">
                        {session.cooldown.exercises.map((exercise, idx) => (
                          <div
                            key={idx}
                            className="bg-white rounded-lg p-3 shadow-sm"
                          >
                            <p className="font-medium">{exercise.name}</p>
                            <p className="font-semibold text-gray-600">
                              {exercise.duration}
                            </p>
                            {exercise.notes && (
                              <p className="text-sm text-gray-500 mt-1 italic">
                                {exercise.notes}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      }
    </div>
  );
};

export default WorkoutDisplay;

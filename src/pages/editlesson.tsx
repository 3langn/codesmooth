// const fetcher = (url: string) => fetch(url).then((res) => res.json());
import React, { useEffect, useRef } from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import { CodeSmoothApi } from '../api/codesmooth-api';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import Button from '../common/Button';
import { LessionComponent } from '../components/LessionComponent';
import {
  onDrag,
  selectLesson,
  setLession,
  setSummary,
  setTitle,
} from '../features/auth/LessonSlice';
import type { ILesson, LessionComponentProps } from '../shared/interface';

const Course = () => {
  // const { courseId } = useParams();
  // const { data, error } = useSWR(`/api/courses/${courseId}`, fetcher);

  // if (error) return <div>failed to load</div>;
  // if (!data) return <div>loading...</div>;
  // const components = useAppSelector(selectComponents);
  const lession = useAppSelector<ILesson>(selectLesson);
  const dragItemRef = useRef<any>(null);
  const dragItemOverRef = useRef<any>(null);
  console.log('Lession');
  const dispatch = useAppDispatch();
  useEffect(() => {
    CodeSmoothApi.getLession().then((res) => {
      dispatch(setLession(res.data));
    });
  }, []);

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
      headerChildren={
        <div className="mr-28 flex flex-1 justify-end">
          <Button
            onClick={() => {
              CodeSmoothApi.createLession(lession).then(() => {});
            }}
            text="Save"
            className="bg-light-primary text-white"
          />
        </div>
      }
    >
      <div className="flex w-full justify-start">
        <div className="w-[15%] bg-slate-100">
          <div className="flex flex-col gap-4 p-4">
            <div className="flex flex-col gap-2">
              <div className="text-sm text-gray-400">{lession.title}</div>
            </div>
          </div>
        </div>
        <div className="flex w-[85%] justify-center">
          <div className="my-20 flex w-[70%] flex-col">
            <input
              type="text"
              placeholder="Title"
              className="mb-12 w-full rounded-normal border border-gray-400 p-2 outline-none"
              value={lession.title}
              onChange={(e) => {
                dispatch(setTitle(e.target.value));
              }}
            />

            <textarea
              placeholder="Summary"
              className="h-36 w-full resize-none rounded-normal border border-gray-400 p-2 outline-none"
              value={lession.summary}
              onChange={(e) => {
                dispatch(setSummary(e.target.value));
              }}
            />

            <div className="mt-8 flex flex-col gap-2">
              {lession.components.map((component: LessionComponentProps, index: number) => {
                return (
                  <LessionComponent
                    key={index}
                    isLast={index === lession.components.length - 1}
                    component={component}
                    index={index}
                    onDragStart={() => {
                      dragItemRef.current = index;
                    }}
                    onDragEnter={() => {
                      dragItemOverRef.current = index;
                    }}
                    onDragEnd={() => {
                      dispatch(
                        onDrag({
                          dragIndex: dragItemRef.current,
                          hoverIndex: dragItemOverRef.current,
                        }),
                      );
                    }}
                    isFocus={component.isFocus}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Course;
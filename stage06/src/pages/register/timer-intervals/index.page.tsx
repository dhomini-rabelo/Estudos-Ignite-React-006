import {
  Box,
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { getWeekDays } from '../../../code/utils/date'
import { Div } from './style'

export default function TimerIntervals() {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      intervals: [
        { weekday: 0, enabled: false, startTime: '08:00', endTime: '18:00' },
        { weekday: 1, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekday: 2, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekday: 3, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekday: 4, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekday: 5, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekday: 6, enabled: false, startTime: '08:00', endTime: '18:00' },
      ],
    },
  })
  const { fields } = useFieldArray({
    control,
    name: 'intervals',
  })
  const weekdays = getWeekDays()
  const intervals = watch('intervals')

  async function handleSetTImerIntervals() { }

  return (
    <main className="max-w-[572px] mt-20 mx-auto mb-4 px-4">
      <header>
        <Heading as="h1" className="font-bold">
          Quase lá
        </Heading>
        <Text className="text-Gray-200 mb-6">
          Defina o intervalo de horários que você está disponível em cada dia da
          semana.
        </Text>
        <MultiStep size={4} currentStep={3} />
      </header>
      <Box
        as="form"
        className="flex flex-col mt-6 px-0"
        onSubmit={handleSubmit(handleSetTImerIntervals)}
      >
        <div className="rounded-lg mb-4 border border-Gray-600">
          {fields.map((field) => (
            <div
              className="flex items-center justify-between py-3 px-4 border-t border-Gray-600"
              key={field.id}
            >
              <div className="flex items-center gap-3">
                <Controller
                  name={`intervals.${field.weekday}.enabled`}
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      onCheckedChange={(checked) =>
                        field.onChange(checked === true)
                      }
                      checked={field.value}
                    />
                  )}
                />
                <Text>{weekdays[field.weekday]}</Text>
              </div>
              <Div.intervals className="flex items-center gap-2">
                <TextInput
                  size="sm"
                  type="time"
                  step="60"
                  disabled={intervals[field.weekday].enabled === false}
                  {...register(`intervals.${field.weekday}.startTime`)}
                />
                <TextInput
                  size="sm"
                  type="time"
                  step="60"
                  disabled={intervals[field.weekday].enabled === false}
                  {...register(`intervals.${field.weekday}.endTime`)}
                />
              </Div.intervals>
            </div>
          ))}
        </div>
        <Button>
          Próximo passo
          <ArrowRight />
        </Button>
      </Box>
    </main>
  )
}